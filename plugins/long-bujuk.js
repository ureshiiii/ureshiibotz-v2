let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
ehh sayangg kamuu jangann betee sama akuu akuu mau kasii tauu ituu tuu dluu udaa yaa jangann sedi dan badmood lagii akuu ud ga chatan lagii sama mantan akuu aku cuma fokus ke kamuu sekarang ya ya ya ya ya ya ya ya ya

akuu ud punya cwo ganteng banget namanya (sebut nama nya) diaa yangg gantengg dan comell kuu inii 😋😋

ishh uda udaa ah akuu ga chatn tauu sama mantan akuu kamuu gimana nii
akuu kan ud punya kamuu
lgian itu chatan waktu ak dluu sengg 💕

uda uda jangann marahh lagii yaa?? ☹️☹️
aku sedii kaloo kamuu marah ke akuu
maaf yaaa ☹️☹️
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Cie lagi nyari longtext ><', 'status@broadcast')
}
handler.help = ['longtext-bujuk']
handler.tags = ['long']
handler.command = /^(longtext-bujuk)$/i

export default handler