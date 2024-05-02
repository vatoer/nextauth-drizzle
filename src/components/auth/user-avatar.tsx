import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  console.log("session avatar", session);

  const imageSrc = session.user.image || ""; // Provide a default value for image source

  return (
    <div>
      <Image src={imageSrc} alt="user avatar" width={50} height={50} />
    </div>
  );
}
