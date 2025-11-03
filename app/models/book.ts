import { DateTime } from 'luxon'
import {BaseModel, column, hasOne} from '@adonisjs/lucid/orm'
import Author from "#models/author";
import * as relations from "@adonisjs/lucid/types/relations";


export default class Book extends BaseModel {
  @column({isPrimary: true})
  declare id: number

  @column()
  declare name: String

  @column()
  declare description: String
  @column()
  declare price: number

  @column()
  declare quantity: number

  @hasOne(() => Author)
  declare author: relations.HasOne<typeof Author>


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
