import { auth } from "@/auth";

const AccountPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome {session?.user?.name}!</p>
    </div>
  );
};

export default AccountPage;
