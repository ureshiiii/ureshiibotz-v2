let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @notsntyya
happy valentine bubb 🤍
I think I'm the luckiest man in the world because I can have a woman like you, I'm really happy, I'm really lucky to have you. you make me feel so lucky because i could meet you, i really love u, you're so perfect, u really treat me like a king. aku ga bisa berhenti mengatakan beruntung, karna aku emang bener bener beruntung. aku tau ini cuma virtual, tapi kamu bikin aku ngerasa jadi lebih seneng,  you are my everything and my world,  i love u more than anything in this world, i don't need a reason to fall in love with u ,  i love u because i want it, you're beautifull, you're amazing. thank u for being in my life, thank u for everything u do, THANK UUUUU, i'm always happy when i'm around u, u make me so happy, aghhh i love uu more than u know. 
I LOVEEEEE UUUU`
.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-pacar2']
handler.tags = ['long']
handler.command = /^(longtext-pacar2)$/i

export default handler