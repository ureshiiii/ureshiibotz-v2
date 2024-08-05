export async function before(m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiBot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
        m.reply('Ups, admin mengaktifkan fitur *Anti Bot*. Kamu terdeteksi sebagai bot. Jadi kamu akan saya kick!');
    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }return true
    }
  }
  return true
}