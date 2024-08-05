let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @longtextbub
BUBBIEEE, HAPPY BOYFRIEND DAYY kamuu orang yang palingg aku sayanggggggg, thank you so much udah sama aku samai detik ini, you're the most comfortable home, you're the person i love the most, you're a great person in the eyes i love you more, aku gatau kalau gada kamu thank you udah mau hadir dihidup aku yaaa, makanya kamu gaboleh pergii kemana mana, stay with me okaii?? always? forever? don't promise if you just Deny it bubb, AHAHAHA LOVE YOU MOREEE, F-O-R-E-V-E-R i think you're the best boyfriend for me just me, jangan kebanyakan cemburu nanti cepet tua, banyakin aja cinta sama aku dijamin awet muda well, jangan bilang bohong karna aku jujur dalam mencintai mu ANJAII AHAHAHA, sayangkuuu cintakuuu cowokuu pacarkuu semestakuuu maaff kalau cuman bisa bikin longtext kaya ginii, nanti aku pamerin ke temen temen kalau aku punya pacar paling paling palingg ganteng paling lucu paling pinter biar semua nya iri kalau aku punya cowo sesempurna kamu, makasihh yaa bubbieee kamu udah mau jadi mood booster aku, udah mau jadi yang terbaik sekali lagi happy boyfriend dayy, i love you more, i love you soo muchh🫂🤍🤍`
.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-pacar4']
handler.tags = ['long']
handler.command = /^(longtext-pacar4)$/i

export default handler