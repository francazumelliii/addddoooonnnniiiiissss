import type { HttpContext } from '@adonisjs/core/http'
import Post from "#models/post";

export default class PostsController {
  /**
   * Display a list of resource
   */
  async index({request}: HttpContext) {
    const page: number = request.input('page', 1)
    const size: number = request.input('size', 10)
    const posts: any = await Post.query().paginate(page, size)
    return posts
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data: any = request.all()
    if(!data.title){
      return response.badRequest('Missing field [title]')
    }
    const newPost: Post = await Post.create(data)
    return response.created(newPost)


  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const id = params.id
    const post = await Post.find(id)

    if(!post){
      return response.notFound(`Post Not Found with id: ${id}`)
    }
    return response.ok(post)
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const id = params.id
    const data: any = request.all()
    if(!id){
      return response.badRequest('Missing field [id]')
    }

    const post: Post | null = await Post.findOrFail(id)
    post.merge(data)

    await post.save()
    return post
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const id: number = params.id
    const post: Post = await Post.findOrFail(id)
    await post.delete()

    return response.noContent()


  }
}
