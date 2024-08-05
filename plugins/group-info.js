let handler = async (m, { conn, participants, groupMetadata }) => {
await m.reply(tunggu)
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del, antiBot, antiVideo, antiFoto, antiSticker } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
☁️ *Info Group*

*-* Id: ${groupMetadata.id}
*-* Nama: ${groupMetadata.subject}
*-* Member: ${participants.length} Member
*-* Owner: @${owner.split('@')[0]}

☁️ *Admin*

${listAdmin}

☁️ *Pengaturan Group*

*-* Chat Banned: ${isBanned ? 'Aktif' : 'Nonaktif'}
*-* Welcome: ${welcome ? 'Aktif' : 'Nonaktif'}
*-* Anti Bot: ${antiBot ? 'Aktif' : 'Nonaktif'}
*-* Anti Delete: ${del ? 'Aktif' : 'Nonaktif'}
*-* Anti Link: ${antiLink ? 'Aktif' : 'Nonaktif'}
*-* Anti Foto: ${antiFoto ? 'Aktif' : 'Nonaktif'}
*-* Anti Video: ${antiVideo ? 'Aktif' : 'Nonaktif'}
*-* Anti Sticker: ${antiSticker ? 'Aktif' : 'Nonaktif'}

☁️ *Deskripsi*

${groupMetadata.desc?.toString() || 'Tidak Ada'}

> Powered By UreshiiBotz
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogroup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

export default handler