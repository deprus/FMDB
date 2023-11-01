import Link from "next/link";
import { Button } from "./ui/button";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function SignInButton() {
  return (
    <>
      <SignedOut>
        <Button asChild className="bg-blue-600 mr-3 hover:bg-blue-700">
          <Link href="/sign-up">Get started</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button asChild className="bg-blue-600 mr-3 hover:bg-blue-700">
          <SignOutButton />
        </Button>
      </SignedIn>
    </>
  );
}
