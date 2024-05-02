import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    randomkey?: string;
    additional?: string;
  }
  interface Session {
    user: User & DefaultSession["user"];
  }
}

//ini masih belum bisa
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    //perwakilan?: string;
    randomkey?: string;
    user?: User;
  }
}
