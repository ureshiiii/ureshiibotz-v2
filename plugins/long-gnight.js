let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `good night sayangkuu, selamat istirahat yaa, howw ur dayy? gimana harii ini?? ada yang menarik ga harii ini?? coba cerita sama aku, aku jug mau denger keseharian kamu hari ini gimana, but aku juga ga maksa kmu cerita kok, kalau hari ini jahat sama kamu, kamu harus baik sama diri sendiri jangan nyerah karna hari ini ga baik doang, ayo semangat, masih ada hari esok, semoga besok jadi have a nice day ya buat kamu, kalo kamu bener bener cape sama hari ini istirahat ya udah malem juga, semangat terus ya sayang, udah kamu  bobo sekarang have a nice dream sayangg`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-gnight']
handler.tags = ['long']
handler.command = /^(longtext-gnight)$/i

export default handler