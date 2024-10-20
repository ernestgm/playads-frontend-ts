"use server";
import { redirect } from "next/navigation";
import {signIn} from "../../../../auth";
import PROJECT_CONFIG from "../../../../config/config";
import {CreateBusinessController} from "./controller";

export const businessCreateAction = async (fd) => {
    const res = await CreateBusinessController.create(fd)
    if (!res.success) {
        return res.data
    }

    redirect(PROJECT_CONFIG.ROUTES.BUSINESS.MAIN);
};