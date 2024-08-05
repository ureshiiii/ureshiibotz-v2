import { xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, usedPrefix }) => {
m.react(rwait)
	let { lastrob, lastweekly, lastdaily, lastmonthly } = global.db.data.users[m.sender]

    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Cooldown'
    let str = `
List Cooldown Waktu RPG Kamu

> *Last Daily :* ${lastdaily > 0 ? '❌' : '✅'}
> *Last Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
> *Last Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}

Kembali saat cooldown sudah selesai!
`.trim()

await conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: "Cooldown",
thumbnailUrl: pp,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['cooldown']
handler.tags = ['rpg']
handler.command = /^(cd|cooldown)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

