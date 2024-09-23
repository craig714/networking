import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Ad } from "@/models/Ads.js"
import { AppState } from "@/AppState.js"



class AdsService {
  async getAds() {
    const response = await api.get('api/ads')
    logger.log('got ads', response.data)
    const newAds = response.data.ads.map(adsPOJO => new Ad(adsPOJO))
    AppState.ad = newAds

  }




}





export const adsService = new AdsService()