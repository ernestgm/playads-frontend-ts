import axios from "axios";
import PROJECT_CONFIG from "@/config/config";
import { auth } from "@/auth";


const ApiHandler = async () => {
    const session = await auth()

    const instance = axios.create({
        baseURL: PROJECT_CONFIG.API_CONFIG.baseURL,
    });

    if (session?.user && "token" in session.user) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${session.user.token}`
    }

    console.log(instance)
    return instance
}

export default ApiHandler

