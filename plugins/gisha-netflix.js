let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱NETFLIX PREMIUM*

➺ 1 bulan 1 profile 1 user 34k
➺ 1 bulan 1 profile 2 user 22k
➺ 1 bulan semi privat 2 device 40k
➺ 1 bulan privat 5 profile 140k
➺ 3 bulan 1 profile 1 user 90k

note:
👩🏻‍💻 Full garansi
👩🏻‍💻 No VPN
👩🏻‍💻 Ultra HD+4k
👩🏻‍💻 Durasi random 25-30 hari
👩🏻‍💻 Garansi 0-3 hari, jika masalah berat bisa 7 hari
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['netflix-premium']
handler.tags = ['gisha']
handler.command = /^(netflix-premium)$/i

export default handler