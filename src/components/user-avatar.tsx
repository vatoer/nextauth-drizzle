import Image from "next/image";
import { auth } from "../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      <Image
        src={session.user?.image ?? ""}
        width={50}
        height={50}
        alt="User Avatar"
      />
    </div>
  );
}
