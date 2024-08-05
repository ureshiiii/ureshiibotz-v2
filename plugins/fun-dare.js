import { dare } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, text, command }) => {
  let name = conn.getName(m.sender)
  let cin = await dare()
  m.reply(`☁️ Halo ${name}, Tantangan:\n❗ ${cin}`)
}

handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i
export default handler
