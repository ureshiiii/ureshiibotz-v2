let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @notsntyya
halou halouu bubbiee, disini aku mau menjelaskan seberapa sempurnanya kamu🫵🏻🫵🏻 dimata aku👀 hai haii buat kamu yang sering bilang " aku jelek, aku ga kaya, aku bodoh " hei?? i just wanna be yours aku terimaaa semua kekurangan ataupun kelebihan kamu aku tetep bakalan milih kamuu, kamu ga bereffort aku yang bereffort gausah takut sama omongan orang orang diluar sana aku tetep bakal berpihak dikamu, kamu itu sempurna dimata orang yang tepat dimata bunda kamu ayah kamu keluarga kamu termasuk aku salah satunyaa☝🏻☝🏻, i lucky to have you, i lucky can know you, i lucky aku gatau gimana mau kasih tau seberapa beruntungnya aku bisa dapetin kamu sebagai pacar aku, kamu aja bisa treat aku like a prince  aku cinta kamu kaya lagunya dangerously nya charlie puth ' i love you, i love you, i love you, i love you dangerously ' terus juga ' if like a movie, oh your the best part ' AHAHAHA LUCU KANNN iya dong pacar siapa dulu?? pacar kamu dong😎😎, aku gatau mau gimana lagi ngasih tau seberuntung itu aku ketemu kamu but i just love you, so much🤍🤍
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-pacar5']
handler.tags = ['long']
handler.command = /^(longtext-pacar5)$/i

export default handler