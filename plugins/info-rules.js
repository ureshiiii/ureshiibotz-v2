import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix: _p, command: _q}) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan, premiumTime } = global.db.data.users[who]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(who)
//let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || 'No Bio'
let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact')
let math = max - xp
let tag = await conn.getName(m.sender)
let mot = pickRandom(["⌬", "⏣", "❐", "❑", "❇", "✡", "✯", "✨", "⛾", "⛐", "♨", "☫", "☘", "◳", "☣", "✎"])

let mii = `
☁️ *Rules UreshiiBotz*

🦢 *Kebijakan Privasi*
> UreshiiBotz tidak akan merekam data riwayat chat user.
> UreshiiBotz tidak akan menyebarkan nomor users.
> UreshiiBotz tidak akan menyimpan media yang dikirimkan oleh users.
> UreshiiBotz tidak akan menyalah gunakan data data users.
> Owner UreshiiBotz berhak melihat data riwayat chat users.
> Owner UreshiiBotz berhak melihat status users.
> Owner UreshiiBotz dapat melihat riwayat chat, dan media yang dikirimkan users.
> Owner UreshiiBotz tidak berhak menyebar luaskan sesuatu yang di kirimkan users ke publik.

*_Privasi user di lindungi Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP) mengatur bahwa orang perorangan termasuk yang melakukan kegiatan bisnis atau e-commerce di rumah dapat dikategorikan sebagai pengendali data pribadi._*

🦢 *Cara penggunaan UreshiiBotz Agar terhindar dari Suspand*
> Users dilarang menelpon maupun memvideo call nomor bot.
> Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
> Users diharap tidak melakukan spam dalam penggunaan bot.
> Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi Owner.
> Users diharap untuk tidak menyalah gunakan fitur fitur bot.

🦢 *S&K Yang Berlaku*
> UreshiiBotz akan keluar dari group jika ada salah satu member melanggar peraturan.
> UreshiiBotz dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
> UreshiiBotz tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
> UreshiiBotz akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
> UreshiiBotz bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
> Database bot akan tereset setiap kali update (Level, Diamon, EXP, DLL Akan Tereset)`
conn.sendMessage(m.chat, {
      text: mii,
      contextInfo: {
      externalAdReply: {
      title: `Rules | UreshiiBotz`,
      body: global.author,
      thumbnailUrl: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=Peraturan',
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]  
}