let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*૮  ֺ  ִ⊹ 📮 Kebsos Tiktok ₊ ׁ 𖢷*

*𖢷 . . followers tiktok no reff*
*🧺 100 folls = Rp 2.000*
*🧺 200 folls = Rp 4.000*
*🧺 300 folls = Rp 6.000*
*🧺 400 folls = Rp 8.000*
*🧺 500 folls = Rp 10.000*
*🧺 1000 folls = Rp 15.000*
• berlaku kelipatan

*𖢷 . . like tiktok*
*🧺 100 like = Rp 2.000*
*🧺 200 like = Rp 3.000*
*🧺 300 like = Rp 4.000*
*🧺 400 like = Rp 5.000*
*🧺 500 like = Rp 6.000*
*🧺 1000 like = Rp 10.000*
• berlaku kelipatan
• no drop

*𖢷 . . views tiktok*
*🧺 5000 views = Rp 4.000*
*🧺 6000 views = Rp 5.000*
*🧺 7000 views = Rp 6.000*
*🧺 8000 views = Rp 7.000*
*🧺 9000 views = Rp 8.000*
*🧺 10.000 views = Rp 9.000*
*🧺 11.000 views = Rp 10.000*
*🧺 12.000 views = Rp 11.000*
• berlaku kelipatan

*𖢷 . .  tiktok save/favorite*
*🧺 500 save = Rp 1.000*
*🧺 1000 save = Rp 2.000*
*🧺 2000 save = Rp 3.000*
*🧺 3000 save = Rp 4.000*
*🧺 4000 save = Rp 5.000*
*🧺 5000 save = Rp 6.000*
• berlaku kelipatan

*𖢷 . .  tiktok share*
*🧺 100 share = Rp 800*
*🧺 200 share = Rp 1.000*
*🧺 300 share = Rp 2.000*
*🧺 400 share = Rp 3.000*
*🧺 500 share = Rp 4.000*
*🧺 1000 share = Rp 7.000*
• berlaku kelipatan

*note!! :*
*– order = sabar*
*– ada harga, ada kualitas*
*– berlaku kelipatan*
*– akun tidak boleh di private*
*– selama proses akun tidak boleh di privat, no ganti pp, dan username. langgar? no garansi*
*– proses 1×24 jam bisa cepat bisa lama, terkadang max 3 hari*
*– jika proses sudah selesai maka tidak ada tanggung jawab admn lagi, kec yg reffil*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '> List Gisha Store', 'status@broadcast')
}
handler.help = ['suntik-tt']
handler.tags = ['gisha']
handler.command = /^(suntik-tt)$/i

export default handler