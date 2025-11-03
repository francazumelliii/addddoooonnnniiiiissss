import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  // node ace migration:run
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title', 255)
      table.string('description', 2048)
      table.boolean('draft').defaultTo(false)
      table.enum('category', ['private', 'public'])
      table.integer('number_of_views')


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  //node ace migration:rollback
  async down() {
    this.schema.dropTable(this.tableName)
  }
}
