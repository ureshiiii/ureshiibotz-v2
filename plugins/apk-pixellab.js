import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
 await conn.reply(m.chat, `
📜 Pixellab Purple
Version: unknown 
Link: https://www.mediafire.com/download/3lwbp8kz4xdcl4s
Filesize: 34mb
`);
}
handler.help = ['pxlb']
handler.command = ['pxlb']
handler.tags = ['apk']
export default handler