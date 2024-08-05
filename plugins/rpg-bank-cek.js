let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
Hallow nasabah!, ini adalah informasi rekening kamu

> Nama: ${user.registered ? user.name : conn.getName(m.sender)}
> Kartu Atm: ${user.atm > 0 ? 'Level ' + user.atm : 'Tidak Punya'}
> Money Tab: ${user.bank}
> Limit Bank: ${user.fullatm} [ 1M ]
> Money Kamu ${user.money}

Perhatikan!, *Rek* Adalah rekening. Dan *Tab* adalah tabungan
`.trim()
conn.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: 'Bank',
thumbnailUrl: "https://telegra.ph/file/00ee61b555099bbfdd614.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler