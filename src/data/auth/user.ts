import { dbauth } from "@/drizzle/dbauth";
import { user } from "@/drizzle/dbauth/schema";
import { eq } from "drizzle-orm";

export const getUserById = async (id: string) => {
  console.log("getUserById", id);
  try {
    const db = await dbauth();

    const usr = await db
      .select({
        user,
      })
      .from(user)
      .where(eq(user.id, id))
      .execute();
    return usr[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  return {
    id: "1",
    email: "email",
    password: "password",
    perwakilan: "perwakilan",
  };
};
