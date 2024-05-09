import connect from "@/app/utils/db";
import User from "@/models/User";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connect(); 
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err) {
          console.error("Error during authentication:", err);
          return null;
        }
        return null; 
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // Add more providers if needed
  ],
};

export default NextAuth(authOptions);

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};