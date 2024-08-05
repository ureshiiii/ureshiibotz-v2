let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Haii!! Gimana kabar nya, gaperlu jawab kok aku tau kamu kenapa - kenapa jadi kamu ga perlu kasih jawaban
Aku ada sedikit pesan buat kamu... 💐
Heii aku tau kamu lagi banyak masalah tapii... Tolong yaa jangan pernah ngelukis tangan kamu aku tau kamu ngelakuin itu biar kamu tenang.... Tapi itu salah karna klo kamu ngelukis tangan kamu itu bakal  
Kekurangan darah karna ngelukis tangan membuat tangan keluar darah dan bukan membuat kamu tenang itu bisa bikin kamu terobsesi untuk itu 
Jadi tolong ya jangan ngelukis  tangan mu kasian lohh badan mu....semangat jangan pantang menyerah..`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-barcode']
handler.tags = ['long']
handler.command = /^(longtext-barcode)$/i

export default handler