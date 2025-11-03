import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Post from "#models/post";

export default class extends BaseSeeder {
  async run() {
   await Post.create({
     title: 'Foto del Gatto',
     description: 'Foto Bober',
     draft: false
   })
  }
}
