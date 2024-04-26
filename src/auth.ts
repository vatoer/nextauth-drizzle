import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { dbauth } from "./drizzle/dbauth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(dbauth),
  session: { strategy: "jwt" },
  ...authConfig,
});
