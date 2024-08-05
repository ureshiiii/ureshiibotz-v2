import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Format salah\nContoh: ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let caption = `
*${text}*

🍞 From: Google

${link}
`
conn.sendFile(m.chat, link, 'image.jpg', caption, m)
}
handler.help = ['gimage <query>']
handler.tags = ['internet']
handler.command = /^(gimage|image)$/i
handler.limit = true
export default handler