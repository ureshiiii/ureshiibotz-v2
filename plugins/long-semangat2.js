let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `hai! Kamu kenapa? Hari ini nangis lagi ya? Gapapa kok, manusia itu ngga terlahir sebagai baja. Kita semua berhak ngerasain sedih, kecewa, kecewa, atau sesal sewaktu waktu. aku tauu.. pasti ada waktu dimana kamu ngerasa kalo perasaan yang kamu rasain itu terlalu banyak, sampai kamu gatau harus ngerasain apa, harus gimana, harus apa, tapi kamu tau kan? Kalo bahkan, senja gatau yang melukisnya itu apa, yang dia tau itu berasa kalau hari sudah berakhir dan malam akan tiba. Kadang, rasa nya tuh capeek banget, seperti langit yang juga tau waktu dia akan terbit dan tenggelam, rasa positif dan negatif yang ada di diri kamu punya giliran. Tapi satu hal yang kamu harus tau itu, di kedua nya, pasti ada yang bersinar cantik di dalam. Sinar itu bisa kelihatan dan bisa tidak. Kaya bintang malam yang bisa juga terlihat, atau tertutup oleh awan. Sinar itu berasal dari cara kamu menghargai dan mengapreasi diri sendiri. Tarik nafas yang dalam yuk! 1 2 3 buang. Aku bangga sama kamu. Kamu juga harus gitu ya? Keep holding on. Daylight Will has it's time again to appear. you'll be your best version one day. But either way, you're enough, insyaallah, i promise`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-semangat2']
handler.tags = ['long']
handler.command = /^(longtext-semangat2)$/i

export default handler