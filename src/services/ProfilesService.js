import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Profile } from "@/models/Profile.js"

class ProfilesService {
  async getProfileByID(profileId) {
    AppState.profile = null
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('Got Profile', response.data)
    const newProfile = new Profile(response.data)
    AppState.profile = newProfile
  }

}

















export const profilesService = new ProfilesService