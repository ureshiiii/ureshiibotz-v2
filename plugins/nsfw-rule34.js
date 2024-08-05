import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.reply(m.chat, `❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ\nketik *.on nsfw*`, m)
	
    if (!text) throw `Contoh : *${usedPrefix}${command}* Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    conn.sendFile(m.sender, res, null, `Nih`, m)
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw']
handler.command = ['rule34']

handler.premium = true
handler.limit = true

export default handler