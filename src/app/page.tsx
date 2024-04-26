import { SignOut } from "@/components/auth/signout-button";
import UserAvatar from "@/components/user-avatar";
import { getUserById } from "@/data/user";

const HomePage = async () => {
  const user = await getUserById("clrp345y00000bc5e7ih2rgyp");
  console.log(user);
  return (
    <div>
      <h1>Home Page</h1>
      <UserAvatar />
      <SignOut />
    </div>
  );
};

export default HomePage;
