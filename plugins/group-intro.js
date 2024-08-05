let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Hallowww, perkenalkan diri kamu!

> Nama:
> Umur:
> Tempat Tinggal:
> Kelas:
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Kenalin', 'status@broadcast')
}
handler.help = ['intro']
handler.tags = ['group']
handler.command = /^(intro)$/i

export default handler