import { getUserById } from "@/data/user";
import Image from "next/image";

const HomePage = async () => {
  const user = await getUserById("clrp345y00000bc5e7ih2rgyp");
  console.log(user);
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src="/images/nextjs.png"
        width={500}
        height={500}
        alt="Next.js Logo"
      />
    </div>
  );
};

export default HomePage;
