let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Format salah\nContoh: ${usedPrefix}${command} saya kuat?`
    m.reply(`"${[
        'Mungkin suatu hari',
        'Tidak juga',
        'Tidak keduanya',
        'Kurasa tidak',
        'Ya',
        'Coba tanya lagi',
        'Tidak ada'
    ].getRandom()}."`)
}
handler.help = ['kerang <text>']
handler.tags = ['fun']

handler.command = /^(kulit)?kerang(ajaib)?$/i

export default handler