import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true, // <https://github.com/nextauthjs/next-auth/issues/519>
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user || !account) {
        throw new Error("Invalid sign in");
      }
      if (account.provider === "google" && profile) {
        user.name = profile.name;
        user.email = profile.email;
        console.log("User signed in with Google:", user);
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
