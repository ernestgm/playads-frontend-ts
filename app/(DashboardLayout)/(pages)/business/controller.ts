import PROJECT_CONFIG from "@/config/config"
import ApiHandler from "@/services/handlers/ApiHandler"

export async function getAll() {
    const res = await (await ApiHandler()).get(PROJECT_CONFIG.API_CONFIG.BUSINESS.ALL)
    return res.data
}