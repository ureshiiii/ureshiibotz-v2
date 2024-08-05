import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
 m.reply(`
📜 Photoshop Touch
Version: unknown 
Filesize: 22mb
Link: https://www.mediafire.com/file/e05njvpdx0z81gr/PS_CC_by_Vijay_Gfx.apk/file
`)}
handler.help = ['pscc']
handler.tags = ['apk']
handler.command = ['pscc']
export default handler