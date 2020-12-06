import dotenv from 'dotenv'
import { Client } from 'discord.js'
import { validPrefix } from './bot.js'

dotenv.config()
const client = new Client()

client.on('ready', () => {
  // eslint-disable-next-line
  console.log('Bot is working')
})

client.on('message', ctx => {
  // If the prefix doesn't match do anything
  if (!validPrefix(ctx)) {
    // eslint-disable-next-line
    return
  }
})

client.login(process.env.BOT_TOKEN)
