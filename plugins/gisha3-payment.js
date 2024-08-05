let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*⤹ 🛍️  . . PAYMENT GISHA STORE*

note : fee admin !
TF Dana ke Dana + Rp100 
TF Bank Ke Dana + Rp500
TF Bank ke Gopay + Rp1.000 

💰 . DANA
- 081914794066 (siti)

💰 . GOPAY
- 081914794066 (gizka)

• jika ingin transfer konfirmasi dulu
• transfer ga pakai fee admn? ga di proses!
• transfer sesuai nominal pembelian
• sertakan bukti pembayaran
• payment hanya nomor diatas, selain itu bukan
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> Payment Gisha Store', 'status@broadcast')
}
handler.help = ['payment']
handler.tags = ['gisha3']
handler.command = /^(payment)$/i

export default handler