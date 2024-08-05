let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
haloo mama inii untuk mama aku yg paling hebat di duniaa, mama yg selalu nerangin kehidupan akuu, mama yg selaluuu ngejagaa akuuu dari kecil smpe skrg, aku beruntung bisa jd anak mama, aku mau bilang sesuatu, makasi ya mama uda ngerawat aku dari kecil smpe sekarang, aku tau ngelahirin itu sakit, mama ngelahirin aku dengan taruhan nyawa, ngerawat aku dr kecil smpe sekarang, aku tau itu ga mudahhh, aku cuma bisa bilang terimakasi ke mama uda mau jadi mama yg baik buat aku, mama berhasil jd mama yg baik buat akuu, tp mungkin aku blm berhasil jd anak yg baik buat mama, tp aku bakal terus berusaha untuk jadi anak yg baik buat mama, mama doain aku sukses ya biar aku bisa banggain mamaaa, maaf mungkin aku selalu ngelawan perintah mama, tp mama senantiasa sayang ke aku, mama bener bener mama yg hebat, aku bangga punya ibu seperti mama❤️.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-ortu1']
handler.tags = ['long']
handler.command = /^(longtext-ortu1)$/i

export default handler