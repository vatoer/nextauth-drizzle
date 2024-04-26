import { dbauth } from "@/drizzle/dbauth";
import { user } from "@/drizzle/dbauth/schema";
import { eq } from "drizzle-orm";

export const getUserById = async (id: string) => {
  const usr = await dbauth
    .select({
      user,
    })
    .from(user)
    .where(eq(user.id, id))
    .execute();

  if (usr.length === 0) {
    return null;
  }

  return usr[0];
};

export const getUserByEmail = async (email: string) => {
  const usr = await dbauth
    .select({
      user,
    })
    .from(user)
    .where(eq(user.email, email))
    .execute();
  if (usr.length === 0) {
    return null;
  }
  return usr[0].user;
};
