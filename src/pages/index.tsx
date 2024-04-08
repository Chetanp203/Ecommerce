import Navbar from "~/components/Navbar";
import AuthForm from "~/components/AuthForm";

export default function Home() {
  return (
    <div className="w-full ">
      <Navbar />
      <AuthForm />
    </div>
  );
}
