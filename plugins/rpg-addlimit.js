//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag pengguna'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah *Limit* yang ingin Anda tambahkan'
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let money = xp
  
  if (money < 1) throw 'Minimum adalah  *1*'
  let users = global.db.data.users
  users[who].limit += xp

  await m.reply(`Menambah total *${xp}* Limit`)
 conn.fakeReply(m.chat, `Selamat!, parhan kesayangan nya bot menambahkan kamu *${xp}* Limit`, who, m.text)
}

handler.help = ['addlimit <@user>']
handler.tags = ['rpg']
handler.command = ['addlimit'] 
handler.rowner = true

export default handler

