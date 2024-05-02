import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { LoginSchema } from "@/auth/login/_zodschema/login";
import { getUserByEmail } from "@/data/auth/user2";
import { NextAuthConfig } from "next-auth";

export default {
  //  basePath: "/api/auth", // <https://github.com/nextauthjs/next-auth/discussions/9748
  trustHost: true, // <https://github.com/nextauthjs/next-auth/issues/8327>
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true, // <https://github.com/nextauthjs/next-auth/issues/519>
    }),
    Credentials({
      async authorize(credentials) {
        const validatedCredentials = LoginSchema.safeParse(credentials);

        if (validatedCredentials.success) {
          const { email, password } = validatedCredentials.data;
          const user = await getUserByEmail(email);
          //console.log("user", user);
          if (!user || !user.password) {
            return null;
          }

          const isPasswordMatch = await bcrypt.compare(password, user.password);
          if (!isPasswordMatch) {
            return null;
          }

          //return user;
          return {
            ...user,
            //perwakilan: "perwakilan", // bagaimana cara mendapatkan perwakilan dari user?
            randomkey: "randomkey",
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user || !account) {
        throw new Error("Invalid sign in");
      }

      if (account.provider === "google" && profile) {
        //console.log("profile", profile);
        //console.log("user", user);
        const { name, email, picture } = profile;
        if (!email || !name) {
          throw new Error("Google account missing email");
        }
        const img = picture || null;
        //update user profile
        return true;
      }
      return true;
    },
    async session({ session, token }) {
      console.log("mysession", session);
      console.log("mytoken", token);
      session.user.id = token.sub as string;
      session.user.additional = "additional data";
      //session.user.randomkey = token.randomKey as string;
      session.user.randomkey = "randomkey";

      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("[jwt] token", token);
      console.log("[jwt] user", user);
      console.log("[jwt] account", account);
      if (user) {
        token.id = user.id;

        //token.sekolahId = user.sekolahId;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
