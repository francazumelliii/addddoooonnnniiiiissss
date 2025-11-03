import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    request.qs() // query string
    const page: any = request.input('page', 0);
    const limit = request.input('limit', 10);
    console.log(page, limit)
    return [{name: 'Mario'}, {name: "Andrea"}]

  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const name = request.input('name')
    const data = request.only(['email', 'password']);
    const data2 = request.except(['email', 'password']);
    console.log(name, data, data2)
    return data2;
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    return {
      id: params.id,
    }
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    console.log(params,request)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    console.log(params)
  }
}
