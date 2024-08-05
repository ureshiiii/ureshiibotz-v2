import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `Masukan nomor, tag atau reply pesan doi.`, m)
  
  if(isNaN(number)) return conn.reply(m.chat, `Nomor yang kamu masukan salah!`, m)
  if(number.length > 15) return conn.reply(m.chat, `Format salah!\nContoh: .terima @${user.split('@')[0]}`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
    if(!users) return conn.reply(m.chat, `Doi atau nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`, m)
    if(user === m.sender) return conn.reply(m.chat, `Tidak bisa berpacaran dengan diri Sendiri!`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `Maaf kak, tapi saya sepenuhnya milik Frhn`, m)
    let me = m.sender

    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat, `Maaf @${user.split('@')[0]} tidak sedang menembak kamu`, m, { contextInfo: { mentionedJid: [user]}})
    }else{
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Selamat kamu resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]} 💛 @${me.split('@')[0]} ya kak`,m, { contextInfo: { mentionedJid: [user, me]}})
    }
	}	
}
handler.help = ['terima']
handler.tags = ['jadian']
handler.command = /^(terima)$/i
handler.group = true
handler.limit = false
handler.fail = null
export default handler
