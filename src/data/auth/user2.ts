import { dbauth } from "@/drizzle/dbauth";
import { user } from "@/drizzle/dbauth/schema";
import { eq } from "drizzle-orm";
export const getUserByEmail = async (email: string) => {
  try {
    const db = await dbauth();

    const usr = await db
      .select({
        user,
      })
      .from(user)
      .where(eq(user.id, "clveyv6v300007jzdvm3c04t4"))
      .execute();
    console.log("userku", usr);
    return usr[0].user;
  } catch (error) {
    console.log("kemana ini");
    console.log(error);
    return null;
  }
};
