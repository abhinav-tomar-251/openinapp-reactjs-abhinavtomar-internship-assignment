import NextAuth from "next-auth";
import { authoptions } from "./authoptions";

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };