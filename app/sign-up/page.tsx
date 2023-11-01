import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="container flex justify-center mx-auto py-3 flex-grow">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}
