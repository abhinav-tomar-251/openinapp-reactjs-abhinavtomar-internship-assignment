import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
// import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_CLIENT_ID,
        //     clientSecret: {
        //         appleId: process.env.APPLE_CLIENT_ID,
        //         teamId: process.env.APPLE_TEAM_ID,
        //         privateKey: process.env.APPLE_PRIVATE_KEY,
        //         keyId: process.env.APPLE_KEY_ID,
        //     },
        // }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         email: {
        //             label: "Email",
        //             type: "text",
        //             placeholder: "",
        //         },
        //         password: {
        //             label: "Password",
        //             type: "password",
        //         },
        //     },
        //     async authorize(credentials) {
        //         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify(credentials),
        //         });
        //         const data = await res.json();
        //         if (res.ok) {
        //             return data;
        //         } else {
        //             return null;
        //         }
        //     },
        // }),
    ],
    secret: process.env.NEXT_AUTH_SECRET,

    pages: {
        signIn: "/",
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}