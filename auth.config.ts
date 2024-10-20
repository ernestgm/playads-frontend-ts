
export const authConfig = {
    pages: {
        signIn: "/authentication/login",
    },
    callbacks: {
        authorized: ({ auth }: any) => {
            return !!auth?.user;
        },
        session: async ({ session, token } : any) => {
            session.user = token.user

            return session;
        },
        jwt: async ({ token, user } : any) => {
            if (user) {
                token.user = user;
            }

            return token;
        },
    },
    providers: [], // Add an empty array or provide the necessary provider configurations
}