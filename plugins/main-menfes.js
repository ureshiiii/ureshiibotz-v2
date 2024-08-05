let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `Format salah\nContoh: ${usedPrefix + command} nomor|nama pengirim|pesan\n\n📮 Nama pengirim boleh nama samaran atau anonymous.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `Format salah\nContoh: ${usedPrefix + command} nomor|nama pengirim|pesan\n\n📮 Nama pengirim boleh nama samaran atau anonymous.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'Tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    	let id = + new Date
    	await m.reply(tunggu)
        let tek = `Hai @${data.jid.split('@')[0]}, kamu menerima pesan Menfess nih.\n\n📮 Dari: ${name}\n📜 Pesan: ${pesan}\n\nPesan ini dikirim oleh Bot WhatsApp *UreshiiBotz*. Balas pesan disini, nanti akan bot sampaikan ke pengirim`.trim()
        await conn.reply(data.jid, tek, null)
        .then(() => {
            m.reply('Berhasil mengirim pesan menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
}
handler.tags = ['main']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true
export default handler
