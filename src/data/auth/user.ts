import { dbauth } from "@/drizzle/dbauth";
import { user } from "@/drizzle/dbauth/schema";
import { eq } from "drizzle-orm";

export const getUserById = async (id: string) => {
  console.log("getUserById", id);
  try {
    const usr = await dbauth
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
