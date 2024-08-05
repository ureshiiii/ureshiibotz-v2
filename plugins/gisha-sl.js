let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
⤹ 🛍️  . . GIFT STARLIGHT CARD

+  ֹ 𓂋 🎁 Starlight Card Agustus . . ɞ
 ֶָ 💎 ࣪  300 (basic) = Rp 30.000
 ֶָ 💎 ࣪  750 (prem) = Rp 50.000

+  ֹֹ 𓂋 🎁 Starlight Card September . . ɞ
 ֶָ 💎 ࣪  300 (basic) = Rp 25.000
 ֶָ 💎 ࣪  750 (prem) = Rp 40.000

+  ֹ 𓂋 🎁 Starlight Card Oktober . . ɞ
 ֶָ 💎 ࣪  300 (basic) = Rp 20.000

note :
➜ wajib berteman 8 hari atau lebih
➜ di proses sesuai antrian!
➜ unfollow = hangus
➜ membeli = setuju
➜ ganti nickname ga konfirm? hangus
➜ order wajib sabar
➜ jika item/skin sudah dikirim, ss sebagai bukti sudah terkirim
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['sl']
handler.tags = ['gisha']
handler.command = /^(sl)$/i

export default handler