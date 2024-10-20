"use server";
import {signOut} from "@/auth";
import ApiHandler from "@/services/handlers/ApiHandler";
import PROJECT_CONFIG from "@/config/config";
import { redirect } from "next/navigation";

export const signOutAction = async () => {
    try {
        const res = await (await ApiHandler()).post(PROJECT_CONFIG.API_CONFIG.USERS.LOGOUT);
        if (res.data?.success) {
            await signOut({ redirectTo: "/authentication/login" });
        }
    } catch (error) {
        console.log(error);
    } finally {
        redirect("/");
    }
};