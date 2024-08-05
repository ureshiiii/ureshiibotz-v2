let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(tunggu)
    if (!text) throw `Kalau kamu menemukan fitur Error, lapor pake peintah Ini\nContoh: ${usedPrefix + command} Selamat Siang Owner, Saya Menemukan Error Seperti <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `*${command.toUpperCase()}*\n\n📜 Dari: @${m.sender.split`@`[0]}\n\n> ${text}`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`Pesan Terkirim Kepemilik Bot, Jika ${command.toLowerCase()} Hanya Main-Main Tidak Akan Ditanggapi.`)
}
handler.help = ['report']
handler.tags = ['main']
handler.command = /^(report|request)$/i
export default handler
