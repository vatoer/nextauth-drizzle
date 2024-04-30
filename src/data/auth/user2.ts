import { dbauth } from "@/drizzle/dbauth";
import { user } from "@/drizzle/dbauth/schema";
import { eq } from "drizzle-orm";
export const getUserByEmail = async (email: string) => {
  return {
    id: "1",
    email: "email",
    password: "password",
    perwakilan: "perwakilan",
  };
};
