let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `▸ Cr : @notsntyya
first of all i want to say thank you for being in my life, kalo ada alat pengukur kebahagiaan, mungkin kebahagiaan aku pas sama kamu udah ga ter ukur. semenjak kamu dateng di kehidupan aku, aku merasa punya support system terbaik akdhskjsna, I don't want to lose you again, i really happy to meet u on my life, thank u for everything u do, u mean the world to me, i'm so lucky to have u, i'm always happy when i'm around u, u make me so happy, u're so perfect. u really treat me like a king, u make me feel so lucky to have met a girl like u. without u, i would be a completely different person. nothing can make me happy, my happiness is now only in u. aghhhh i love u more than ever u know.
kamu tau gaa apa bedanya kamu sama hutan? kalo hutan forest kalau kamu for the last of my life.
asek asekkkk`
.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-pacar3']
handler.tags = ['long']
handler.command = /^(longtext-pacar3)$/i

export default handler