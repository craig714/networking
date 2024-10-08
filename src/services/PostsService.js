import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Posts.js"

class PostsService {
  async getAllPosts() {
    const response = await api.get('api/posts')
    logger.log('Got posts!', response.data)
    const newPosts = response.data.posts.map(postPOJO =>
      new Post(postPOJO))
    AppState.posts = newPosts
  }
}













export const postsService = new PostsService()