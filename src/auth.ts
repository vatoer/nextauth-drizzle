import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
});
