import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import {PostFactory} from "#database/factories/post_factory";

export default class CreateUsers extends BaseCommand {
  static commandName = 'create:users'
  static description = ''

  static options: CommandOptions = {
    startApp:true
  }

  async run() {
    await PostFactory.createMany(10)
  }
}
