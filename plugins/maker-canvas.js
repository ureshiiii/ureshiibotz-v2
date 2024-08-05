import uploadImage from '../lib/uploadImage.js'
import { createSticker } from 'wa-sticker-formatter'
import fs from 'fs'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered']

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
await m.react(rwait)
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
Format salah
Contoh: ${usedPrefix}filter jain

📜 *List Effect*

${effects.map(effect => `*-* ${effect}`).join('\n')}
`.trim()
    if (/image/g.test(mime) && !/webp/g.test(mime)) {
    	try {
			let img = await q.download?.()
			let out = await uploadImage(img)
			let apiUrl = global.API('https://some-random-api.com/canvas/', encodeURIComponent(effect), {
    avatar: out
  })
            await conn.sendFile(m.chat, apiUrl, 'atet.webp', '', m)
    	} catch (e) {
    		console.log(e)
    	}
    } else {
    	m.reply(`Reply Gambar dengan caption ${usedPrefix + command}`)
    }
}

handler.help = ['filter']
handler.tags = ['maker']
handler.command = /^(filter)$/i

export default handler