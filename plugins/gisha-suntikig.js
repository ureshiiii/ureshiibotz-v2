let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*૮  ֺ  ִ⊹ 📮 Instagram ₊ ׁ 𖢷*

*𖢷 . . followers no reffil*
*🧺 100 folls = Rp 1.000*
*🧺 200 folls = Rp 2.000*
*🧺 300 folls = Rp 3.000*
*🧺 400 folls = Rp 4.000*
*🧺 500 folls = Rp 5.000*
*🧺 600 folls = Rp 6.000*
*🧺 700 folls = Rp 7.000*
*🧺 800 folls = Rp 8.000*
*🧺 900 folls = Rp 8.500*
*🧺 1000 folls = Rp 9.000*
• berlaku kelipatan

*𖢷 . . followers reffil (30 day)*
*🧺 100 folls = Rp 3.000*
*🧺 200 folls = Rp 5.000*
*🧺 300 folls = Rp 7.000*
*🧺 400 folls = Rp 9.000*
*🧺 500 folls = Rp 9.500*
*🧺 1000 folls = Rp 15.000*
• berlaku kelipatan

*𖢷 . . followers Indonesia (reff 30 day)*
*🧺 100 folls = Rp 4.000*
*🧺 200 folls = Rp 8.000*
*🧺 300 folls = Rp 12.000*
*🧺 400 folls = Rp 16.000*
*🧺 500 folls = Rp 20.000*
*🧺 1000 folls = Rp 38.000*
• berlaku kelipatan

*𖢷 . . like ig no reffil*
*🧺 100 like = Rp 800*
*🧺 200 like = Rp 1.500*
*🧺 300 like = Rp 2.500*
*🧺 400 like = Rp 3.500*
*🧺 500 like = Rp 4.500*
*🧺 600 like = Rp 5.000*
*🧺 700 like = Rp 6.000*
*🧺 800 like = Rp 7.000*
*🧺 900 like = Rp 8.000*
*🧺 1000 like = Rp 9.000*
• berlaku kelipatan

*𖢷 . . like ig permanen*
*🧺 100 like = Rp 1.000*
*🧺 200 like = Rp 2.000*
*🧺 300 like = Rp 3.000*
*🧺 400 like = Rp 4.000*
*🧺 500 like = Rp 4.500*
*🧺 1000 like = Rp 7.000*
• berlaku kelipatan

*𖢷 . . instagram views*
*🧺 1000 views = Rp 1.500*
*🧺 2000 views = Rp 2.000*
*🧺 3000 views = Rp 3.000*
*🧺 4000 views = Rp 4.000*
*🧺 5000 views = Rp 5.000*
*🧺 6000 views = Rp 6.000*
*🧺 10.000 views = Rp 9.000*
• berlaku kelipatan
• bisa video, tv, rells


*note!! :*
*– order = sabar*
*– all trx no reff*
*– ada harga, ada kualitas*
*– akun tidak boleh di private*
*– selama proses akun tidak boleh di privat, no ganti pp, dan username. langgar? no garansi.*
*– proses 1×24 jam bisa cepat bisa lama, terkadang max 3 hari*
*– jika proses sudah selesai, maka tidak ada tanggung jawab admn lagi, kec yang reffil*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['suntik-ig']
handler.tags = ['gisha']
handler.command = /^(suntik-ig)$/i

export default handler