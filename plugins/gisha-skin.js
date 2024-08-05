let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . GIFT ITEM & SKIN SHOP

₊  🎁  ⁄⁄ Gift Item Shop  ୨୧

 ֶָ 💎 ࣪  109 (Emote) = Rp 12.000
 ֶָ 💎 ࣪  199 (Create Squad ) = Rp 28.000
 ֶָ 💎 ࣪  239 (Change Name) = Rp 30.000
 ֶָ 💎 ࣪  299 (Change Name Sq) = Rp 39.000 


₊  🎁  ⁄⁄ Gift Skin Shop  ୨୧

 ֶָ 💎 ࣪  299 (Basic) = Rp 40.000
 ֶָ 💎 ࣪  399 (Elite) = Rp 50.000
 ֶָ 💎 ࣪  599 (Elite) = Rp 78.000
 ֶָ 💎 ࣪  749 (Special) = Rp 98.000
 ֶָ 💎 ࣪  899 (Epic) = Rp 115.000
 ֶָ 💎 ࣪  1089 (Lightborn) = Rp 130.000
   
note :
➜ wajib berteman 8 hari atau lebih
➜ di proses sesuai antrian
➜ unfollow = hangus
➜ membeli = setuju
➜ ganti nickname konfirmasi admin
➜ jika item/skin sudah dikirim, ss sebagai bukti sudah terkirim
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['gift-skin']
handler.tags = ['gisha']
handler.command = /^(gift-skin)$/i

export default handler