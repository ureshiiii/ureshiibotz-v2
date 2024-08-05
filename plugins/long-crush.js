let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
haii, bolee kasii tau sesuatu ga? sebenarnya akuu suka sama kamuu dari lamaa hehehe...


mauu bilang aja sii karenaa akuu tuh ud beberaoa hari nge-crushin kamu dan yaa aku suka sama kamuu
maaf yaa kaloo di tolak gapapa kok soalnya confess biar legaa
.

aku ga peduli, di tolak atau engga yang penting aku ud legaa karenaa akuu bisaa confess dan beraniin diri buat nyatain/ungkapin perasaan ke kamuu hehe

makasii yaa maaf aga lancang dan mengganggu waktunya ☹️💕
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-crush']
handler.tags = ['long']
handler.command = /^(longtext-crush)$/i

export default handler