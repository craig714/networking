import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class AccountsService {
  async getAllAccounts() {
    const response = await api.get('api/accounts')
    logger.log('Got accounts', response.data)
  }
}
















export const accountsService = new AccountsService