let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*📱 IFLIX*

–sharing account
1 bulan = 8k
3 bulan = 10k
6 bulan = 12k
1 tahun = 15k

note:
• kirim ke email cust
• garansi 25-30 day (sebulan)
• akun dari admn
• garansi 6 bulan (setahun)
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['iflix']
handler.tags = ['gisha']
handler.command = /^(iflix)$/i

export default handler