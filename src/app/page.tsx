import { SignIn } from "@/components/auth/sign-in";
import { SignOut } from "@/components/auth/sign-out";
import UserAvatar from "@/components/auth/user-avatar";
import { getUserById } from "@/data/auth/user";
import Image from "next/image";

export default async function Home() {
  const usr = await getUserById("clveyv6v300007jzdvm3c04t4");
  console.log(usr);
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
