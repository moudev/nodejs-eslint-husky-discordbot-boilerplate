/* eslint no-console: 0 */
import dotenv from 'dotenv'
import { Client } from 'discord.js'
import {
  validatePrefix,
  existCommand,
  commandsController
} from './bot.js'

dotenv.config()
const client = new Client()

client.on('ready', () => {
  console.log('Bot is working')
})

client.on('message', ctx => {
  // If the prefix doesn't match do anything
  if (!validatePrefix(ctx)) {
    return
  }

  if (!existCommand(ctx)) {
    ctx.channel.send('`That command doesn\'t exist`')
    return
  }

  console.log('Valid command')

  commandsController(ctx)
})

client.login(process.env.BOT_TOKEN)
