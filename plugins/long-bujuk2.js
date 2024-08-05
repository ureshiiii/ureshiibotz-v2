let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
bubb, masih ngambek yaa? sorryy ihh, kan aku dari tadi udah say sorry ke kamu. maaf yaa kalau aku buat kamu kesel, atau kalau aku ada kesalahan lain ke kamu, aku minta maaf. lain kali aku gak kayak gitu lagi deh, tapi kamu jangan ngambek lagi yaa please? kalau aku buat kamu kesel kasih tau ajaa yaa, jangan ngambek dongg, nanti gantengnya ilangg, eh tapi pacarku ganteng terus sih, jadinya ganteng nya gak ilang ilang, hahahaha. maaf ya sekali lagii, aku janji lain kali gak kayak gitu lagi kokk heheh. i love u pacar yang paling ganteng 🤍🤍`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-bujuk2']
handler.tags = ['long']
handler.command = /^(longtext-bujuk2)$/i

export default handler