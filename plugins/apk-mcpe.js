import fs from 'fs'
let handler = async (m, { conn, args, command }) => {

 m.reply(`
📜 Minecraft PE Official 
Version: 1.19
Filesize: 155mb
Link: https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file
`)}
handler.help = ['mcpe']
handler.tags = ['apk']
handler.command = ['mcpe']
export default handler