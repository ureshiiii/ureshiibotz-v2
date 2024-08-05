let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @notsntyya
i'm so lucky to have you, i'm always happy when i'm around you, you make me so happy, you're so perfect. you really treat me like a king you make me feel so lucky to have met a girl like you, i really love u , aku bener bener lucky bisa kenal sama kamu, bisa dapetin kamu. aku juga bingung mau gimana lagi ngungkapin nya, kaya ga cukup kalo di ungkapin pake kata kata dan aku harap kamu tetep stay disini bareng aku ya? aku tau ini cuma virtual tapi kamu berhasil buat hidup aku jadi lebih seneng, karna kamu udh banyak ngajarin aku banyak hal. hal hal yang selalu aku ingat setiap saat, cuma kamu yang selalu ada buat aku. aku gatau kalau kamu pergi aku gimana. people come and go, kita pasti ga bisa bareng teruss,
aku sayang kamu, selalu dan selamanya. i love you , i love you more.
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-pacar1']
handler.tags = ['long']
handler.command = /^(longtext-pacar1)$/i

export default handler