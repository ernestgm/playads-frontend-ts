import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import PROJECT_CONFIG from "@/config/config";
import ApiHandler from "@/services/handlers/ApiHandler";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                try {
                    const res = await (await ApiHandler()).post(PROJECT_CONFIG.API_CONFIG.USERS.LOGIN, credentials);
                    return {
                        ...res.data.user,
                        token: res.data.token
                    }
                } catch (err) {
                    console.error(err)
                    return null
                }
            },
        }),
    ],
});