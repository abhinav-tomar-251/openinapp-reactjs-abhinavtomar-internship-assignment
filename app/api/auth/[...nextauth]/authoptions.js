// import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

export const authoptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "Samyak" },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //       placeholder: "Your Password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     const user = { id: 1, name: "Samyak", password: "nextauth" };

    //     if (
    //       credentials?.username === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],

  pages: {
    signIn: "/",
  },
};

export default authoptions;