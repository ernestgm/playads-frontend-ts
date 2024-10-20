"use server";
import { redirect } from "next/navigation";
import {auth, signIn} from "@/auth";

export const signInAction = async (fd: FormData) => {
    try {
        const email = fd.get("email");
        const password = fd.get("password");
        
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        
    } catch (error) {
        console.log(error);
    } finally {
        redirect("/");
    }
};

export const checkIsLogin = async () => {
    const session = await auth()
    if (session) {
        redirect("/");
    }
};