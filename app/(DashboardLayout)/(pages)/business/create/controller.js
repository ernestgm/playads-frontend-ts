import ApiHandler from "../../../../handlers/ApiHandler";
import PROJECT_CONFIG from "../../../../config/config";

export class CreateBusinessController {
    static async create(fd) {
        const res = await (await ApiHandler()).post(PROJECT_CONFIG.API_CONFIG.BUSINESS.CREATE, fd)
        return res.data
    }
}