import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";
import UserAvatar from "@/components/auth/user-avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Signin and Signout</div>
      <div>
        <SignIn />
      </div>
      <div>
        <SignOut />
      </div>
      <div>
        <UserAvatar />
      </div>
    </main>
  );
}
