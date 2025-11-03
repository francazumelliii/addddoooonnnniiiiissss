import { DateTime } from 'luxon'
import {BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import Book from "#models/book";
import * as relations from "@adonisjs/lucid/types/relations";

export default class Author extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare name: String
  @column()
  declare lastName: String

  @column()
  declare birthdate: Date

  @column()
  declare state: String

  @hasMany(() => Book)
  declare books: relations.HasMany<typeof Book>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
