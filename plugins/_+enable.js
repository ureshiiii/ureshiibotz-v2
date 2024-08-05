let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
    break
      
    case 'autodetect':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
    break
    
    case 'delete':
       if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
           throw false
         }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.delete = isEnable
    break
       
    case 'detectdelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
    break
    
    case 'antivw':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
    break
      
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiDelete = !isEnable
    break
    
    case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = !isEnable
    break
          
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
    break
   
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
    break
    
    case 'antitoxic':
    case 'antiltxc':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
    break
    
    case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirtex = isEnable
    break
    
    case 'antifoto':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiFoto = isEnable
    break
    
    case 'antivideo':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVideo = isEnable
    break
    
    case 'antiaudio':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiAudio = isEnable
    break
    
    case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
    break
    
    case 'antibot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBot = isEnable
    break
    
    case 'simi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.chatbot = isEnable
    break
    
    case 'antisticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSticker = isEnable
    break
      
    case 'anticall':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('owner', m, conn)
           throw false
         }
       }
       chat.antiCall = isEnable
    break
    
    case 'autolevelup':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autolevelup = isEnable
    break
    
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
    break
    
    case 'autorestart':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.autorestart = isEnable
    break
    
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
    break
    
    case 'composing':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['composing'] = isEnable
    break
    
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
    break
    
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
    break
    
    case 'getmsg':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.getmsg = isEnable
    break
    
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
    break
    
    default:
     if (!/[01]/.test(command)) return m.reply(`
Fitur Khusus Parhan !

> Public = Mode Bot
> AutoRead = Auto Read Chat
> Composing = Gataw
> Restrict = Gataw
> AutoRestart = Auto Restart Bot
> AntiCall = Blokir Telepon
> GcOnly = Gabisa Di Pc
> PcOnly = Gabisa Di Gc
> SwOnly = Cuman Liat Sw

Fitur Khusus Admin Group !

> Welcome = On/Off Welcome
> AutoDetect = Notifikasi Gc
> Delete = Notifikasi Delete
> AntiLink = Hps Link Gc Lain
> AntiSticker = Hps Smw Sticker
> AntiVw = Spill IMG 1X Lihat
> AntiVirtex = Hps Virtex
> AntiToxic = Mecegah Toxic
> Simi = On/Off AI Simi
> AntiFoto = Hps Foto
> AntiAudio = Hps Audio
> AntiVideo = Hps Video
> AutoLevelUp = On/Off LevelUp
> AntiBot = Kick Bot Lain
> AntiSpam = Banned Spammer

— Contoh Mengaktifkan: .on welcome
- Untuk Mengaktifkan
— Contoh Nonaktif: .off welcome
- Untuk Menonaktifkan
`.trim())
      throw false
  }
 conn.reply(m.chat, `Sukses ${isEnable ? 'Mengaktifkan' : 'Menonaktifkan'} ${type}\nUntuk: ${isAll ? 'Bot Ini' : isUser ? '' : 'Group Ini'}
`, m)
}
handler.help = ['on', 'off']
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler