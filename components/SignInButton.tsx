import Link from "next/link";
import { Button } from "./ui/button";

export default function SignInButton() {
  return (
    <Button asChild className="bg-blue-600 mr-3 hover:bg-blue-700">
      <Link href="/">Get started</Link>
    </Button>
  );
}
