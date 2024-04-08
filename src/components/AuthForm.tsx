import React, { useState } from "react";
import { useRouter } from "next/router";
import EmailVerificationPage from "./EmailVerificationPage";
import trpc from "~/pages/api/trpc/[trpc]";
import { type UseTRPCMutationResult } from "@trpc/react-query/shared";

interface AuthFormProps {
  isLogin: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authResult, setAuthResult] =
    useState<UseTRPCMutationResult<"users.login">>();
  const [showVerification, setShowVerification] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const result = await trpc.mutation("users.login", { email, password });
        setAuthResult(result);
      } catch (error) {
        // Handle the error
        console.error("Login failed:", error);
        // Set the auth result to indicate the error
        setAuthResult({ isError: true, data: null, isLoading: false, error });
      }
    } else {
      try {
        const result = await trpc.mutation("users.register", {
          name,
          email,
          password,
        });
        setAuthResult(result);
        setShowVerification(true);
      } catch (error) {
        // Handle the error
        console.error("Registration failed:", error);
        // Set the auth result to indicate the error
        setAuthResult({ isError: true, data: null, isLoading: false, error });
      }
    }
    localStorage.setItem("email", email);
    // You can also redirect the user to another page
    if (!isLogin) {
      router.push("/email-verification");
    }
  };

  const handleVerificationComplete = () => {
    setShowVerification(false);
    router.push("/login");
  };

  return (
    <div>
      {showVerification ? (
        <EmailVerificationPage onComplete={handleVerificationComplete} />
      ) : (
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
          {authResult?.isLoading && <div>Loading...</div>}
          {authResult?.isError && <div>Error: {authResult.error.message}</div>}
          {authResult?.data && (
            <div>{isLogin ? "Login" : "Registration"} successful!</div>
          )}
        </form>
      )}
    </div>
  );
};

export default AuthForm;
