import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn }) => {
await m.react(rwait)
    let res = await googleImage('cewe tobrut')
    let image = res.getRandom()
    await conn.sendFile(m.chat, image, null, '😋😋', m, null)
}
handler.help = ['tobrut']
handler.tags = ['internet']
handler.command = /^(ttgede|cecan|tobrut)$/i
handler.limit = true
export default handler