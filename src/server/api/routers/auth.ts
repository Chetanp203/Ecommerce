// api/routers/auth.router.ts
import { z } from "zod";
import { createRouter } from "@trpc/server";
import prisma from "../../src/server/db";

const authRouter = createRouter()
  .mutation("register", {
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    }),
    resolve: async ({ input }) => {
      const { name, email, password } = input;

      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        throw new Error("User already exists");
      }

      // Create a new user
      const newUser = await prisma.user.create({
        data: { name, email, password },
      });

      return newUser;
    },
  })
  .mutation("login", {
    input: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
    resolve: async ({ input }) => {
      const { email, password } = input;

      // Find the user by email and password
      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (!user || user.password !== password) {
        throw new Error("Invalid email or password");
      }

      return user;
    },
  })
  .mutation("verifyEmail", {
    input: z.object({
      email: z.string().email(),
      verificationCode: z.string(),
    }),
    resolve: async ({ input }) => {
      const { email, verificationCode } = input;

      // Check if the verification code is correct
      if (verificationCode !== "12345678") {
        throw new Error("Invalid verification code");
      }

      // Update the user's email verification status
      const updatedUser = await prisma.user.update({
        where: { email },
        data: { isEmailVerified: true },
      });

      return updatedUser;
    },
  });

export default authRouter;
