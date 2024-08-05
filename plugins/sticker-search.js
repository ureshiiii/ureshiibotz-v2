import { sticker } from '../lib/sticker.js' 
 import { stickerLine, stickerTelegram } from '@bochilteam/scraper' 
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
     // TODO: add stickerly 
     const isTele = /tele/i.test(command) 
     if (!args[0]) throw `
Sticker berasal dari ${isTele ? 'Tele.' : 'sᴇᴀʀᴄʜ.*'}
Note: hasil tidak akurat

Contoh : ${usedPrefix + command} orang hitam
` 
     const json = await (isTele ? stickerTelegram : stickerLine)(args[0]) 
     m.reply(` 
Berhasil menemukan total *${(json[0]?.stickers || json).length}* sticker. 
 `.trim()) 
     for (let data of (json[0]?.stickers || json)) { 
         const stiker = await sticker(false, data.sticker || data, global.packname, global.author) 
         await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m).catch(console.error) 
         await delay(1500) 
     } 
 } 
 handler.help = ['stikersearch <name>'] 
 handler.tags = ['sticker']
 handler.command = /^stickersearch|stikersearch$/i 
  
handler.premium = false

 export default handler 
  
 const delay = time => new Promise(res => setTimeout(res, time))