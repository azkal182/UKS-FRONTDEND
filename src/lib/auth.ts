import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "Username",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        const user = await axios.post(`${"http://localhost:8000"}/api/login`, {
          username: credentials.username,
          password: credentials.password,
        });

        if (user.status !== 200) {
          return null;
        }

        return user.data.data;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      //   console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as unknown as any;
        token.id = u.id;
        token.role = u.role;
        token.accessToken = u.token;
        token.refreshToken = u.refreshToken;
      }
      console.log("JWT Callback", { token, user });
      return token;
    },

    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
      };
    },
  },
};
