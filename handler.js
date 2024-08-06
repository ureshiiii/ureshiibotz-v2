import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
const printMessage = (await import('./lib/print.js')).default
/**
* @type {import('@adiwajshing/baileys')}
*/
const { proto } = (await import('@adiwajshing/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

/**
* Handle messages upsert
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate
*/
export async function handler(chatUpdate) {
    this.msgqueque = this.msgqueque || []
    if (!chatUpdate)
        return
    this.pushMessage(chatUpdate.messages).catch(console.error)
    let m = chatUpdate.messages[chatUpdate.messages.length - 1]
    if (!m)
        return
    if (global.db.data == null)
        await global.loadDatabase()
    try {
        m = smsg(this, m) || m
        if (!m)
            return
        m.exp = 0
        m.limit = false
        try {
            // TODO: use loop to insert data instead of this
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object')
                global.db.data.users[m.sender] = {}
            if (user) {
                if (!('pasangan' in user)) 
                    user.pasangan = ''     
                if (!isNumber(user.money))
                    user.money = 0
                if (!isNumber(user.exp))
                    user.exp = 0
                if (!isNumber(user.limit))
                    user.limit = 25
                if (!isNumber(user.freelimit))
                    user.freelimit = 0
                if (!isNumber(user.joinlimit))
                    user.joinlimit = 1
                if (!isNumber(user.pc))
                    user.pc = 0
                if (!('registered' in user))
                    user.registered = false
                if (!user.registered) {
                    if (!('name' in user))
                        user.name = m.name
                    if (!isNumber(user.age))
                        user.age = -1
                    if (!isNumber(user.regTime))
                        user.regTime = -1
                }
                if (!isNumber(user.afk))
                    user.afk = -1
                if (!('unreg' in user))
                    user.unreg = false
                if (!('afkReason' in user))
                    user.afkReason = ''
                if (!('banned' in user))
                    user.banned = false
                if (!('lastBanned' in user))
                    user.lastBanned = 0
                if (!'BannedReason' in user)
                    user.BannedReason = ''
                if (!'WarnReason' in user)
                    user.WarnReason = ''
                if (!isNumber(user.warn))
                    user.warn = 0
                if (!isNumber(user.level))
                    user.level = 0
                if (!('role' in user))
                    user.role = 'Beginner'
                if (!isNumber(user.premium))
                    user.premium = false
                if (!isNumber(user.premiumTime))
                    user.premiumTime = 0
                if (!isNumber(user.joinlimit))
                    user.joinlimit = 0                
               //DATABASE KEBUTUHAN RPG DIBAWAH     
                if (!isNumber(user.bank)) user.bank = 0
                if (!isNumber(user.atm)) user.atm = 0   
                if (!isNumber(user.lastrob)) user.lastrob = 0                                         
                if (!isNumber(user.lastmonthly)) user.lastmonthly = 0                                         
                if (!isNumber(user.lastdaily)) user.lastdaily = 0                                         
                if (!isNumber(user.lastweekly)) user.lastweekly = 0                                                                                                                        
            } else
                global.db.data.users[m.sender] = {
                money: 0,
                exp: 0,
                limit: 25,
                freelimit: 0,
                registered: false,
                name: m.name,
                pc: 0,
                joinlimit: 1,
                age: -1,
                regTime: -1,
                unreg: false,
                afk: -1,
                afkReason: '',
                banned: false,
                warn: 0,
                level: 0,
                role: 'Beginner',
                BannedReason: '',
                WarnReason: '',
                pasangan: '',
                premium: false,
                premiumTime: 0,
                //RPG DIBAWAH
                bank: 0,
                atm: 0,
                lastrob: 0,
                lastmonthly: 0,
                lastweekly: 0,
                lastdaily: 0,
            }
            let chat = global.db.data.chats[m.chat]
            if (typeof chat !== 'object')
                global.db.data.chats[m.chat] = {}
            if (chat) {
                if (!('isBanned' in chat))
                    chat.isBanned = false
                if (!('welcome' in chat))
                    chat.welcome = true
                if (!('detect' in chat))
                    chat.detect = true
                if (!('sWelcome' in chat))
                    chat.sWelcome = ''
                if (!('sBye' in chat))
                    chat.sBye = ''
                if (!('sPromote' in chat))
                    chat.sPromote = ''
                if (!('sDemote' in chat))
                    chat.sDemote = ''
                if (!('listStr' in chat))
                    chat.listStr = {}
                if (!('delete' in chat))
                    chat.delete = true
                if (!('antiLink' in chat))
                    chat.antiLink = false
                if (!('antiBot' in chat))
                    chat.antiBot = false
                if (!('antiSpam' in chat))
                    chat.antiSpam = true
                if (!('antiSticker' in chat))
                    chat.antiSticker = false
                if (!('viewonce' in chat))
                    chat.viewonce = false
                if (!('antiVirtex' in chat))
                    chat.antiVirtex = true
                if (!('antiToxic' in chat))
                    chat.antiToxic = false
                if (!('antiFoto' in chat))
                    chat.antiFoto = false
                if (!('antiAudio' in chat))
                    chat.antiAudio = false
                if (!('autolevelup' in chat))
                    chat.autolevelup = true
                if (!('simi' in chat))
                    chat.simi = false
                if (!('nsfw' in chat))
                    chat.nsfw = true
                if (!('rpg' in chat))
                    chat.rpg = true
                if (!('game' in chat))
                    chat.game = true
                if (!('teks' in chat))
                    chat.teks = false
                if (!isNumber(chat.expired))
                    chat.expired = 0
            } else
                global.db.data.chats[m.chat] = {
                isBanned: false,
                welcome: true,
                detect: true,
                sWelcome: '',
                sBye: '',
                sPromote: '',
                sDemote: '',
                listStr: {},
                delete: true,
                antiLink: false,
                antiSticker: false,
                viewonce: false,
                antiToxic: false,
                antiVirtex: true,
                antiFoto: false,
                antiAudio: false,
                antiVideo: false,
                antiBot: false,
                antiSpam: true,
                simi: false,
                nsfw: true,
                rpg: true,
                game: true,
                teks: true,
                autolevelup: true,
                expired: 0,
            }
            let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = true
                if (!('composing' in settings)) settings.composing = false
                if (!('restrict' in settings)) settings.restrict = true
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!isNumber(settings.restartDB)) settings.restartDB = 0
                if (!('backup' in settings)) settings.backup = true
                if (!isNumber(settings.backupDB)) settings.backupDB = 0
                if (!('cleartmp' in settings)) settings.cleartmp = true
                if (!isNumber(settings.lastcleartmp)) settings.lastcleartmp = 0
                if (!isNumber(settings.status)) settings.status = 0
                if (!('anticall' in settings)) settings.anticall = true
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: true,
                composing: false,
                restrict: true,
                autorestart: true,
                restartDB: 0,
                backup: true,
                backupDB: 0,
                cleartmp: true,
                lastcleartmp: 0,
                status: 0,
                anticall: true,
            }
        } catch (e) {
            console.error(e)
        }

        if (opts['nyimak'])
            return
        if (!m.fromMe && opts['self'])
            return
        if (opts['pconly'] && m.chat.endsWith('g.us'))
            return
        if (opts['gconly'] && !m.chat.endsWith('g.us'))
            return
        if (opts['swonly'] && m.chat !== 'status@broadcast')
            return
        if (typeof m.text !== 'string')
            m.text = ''

        const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isOwner = isROwner || m.fromMe
        const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPrems = isROwner || (db.data.users[m.sender].premiumTime > 0 || db.data.users[m.sender].premium)

        if (opts['queque'] && m.text && !(isMods || isPrems)) {
            let queque = this.msgqueque,
            time = 1000 * 5
            const previousID = queque[queque.length - 1]
            queque.push(m.id || m.key.id)
            setInterval(async function () {
                if (queque.indexOf(previousID) === -1) clearInterval(this)
                await delay(time)
            }, time)
        }

        if (m.isBaileys)
            return
        m.exp += Math.ceil(Math.random() * 10)

        let usedPrefix
        let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

        const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)): {}) || {}
        const participants = (m.isGroup ? groupMetadata.participants: []) || []
        const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender): {}) || {} // User Data
        const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid): {}) || {} // Your Data
        const isRAdmin = user?.admin == 'superadmin' || false
        const isAdmin = isRAdmin || user?.admin == 'admin' || false // Is User Admin?
        const isBotAdmin = bot?.admin || false // Are you Admin?

        const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
        for (let name in global.plugins) {
            let plugin = global.plugins[name]
            if (!plugin)
                continue
            if (plugin.disabled)
                continue
            const __filename = join(___dirname, name)
            if (typeof plugin.all === 'function') {
                try {
                    await plugin.all.call(this, m, {
                        chatUpdate,
                        __dirname: ___dirname,
                        __filename
                    })
                } catch (e) {
                    // if (typeof e === 'string') continue
                    console.error(e)
                    for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        m.reply(`Hallow sayang, ada surat cinta nih\n\n*${m.plugin}*\nCommand *${usedPrefix}${command} ${args.join(' ')}*\n\n> ${text}`.trim(), data.jid)
                    }
                }
            }
            if (!opts['restrict'])
                if (plugin.tags && plugin.tags.includes('admin')) {
                // global.dfail('restrict', m, this)
                continue
            }
            const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
            let _prefix = plugin.customPrefix ? plugin.customPrefix: conn.prefix ? conn.prefix: global.prefix
            let match = (_prefix instanceof RegExp ? // RegExp Mode?
                [[_prefix.exec(m.text), _prefix]]:
                Array.isArray(_prefix) ? // Array?
                _prefix.map(p => {
                    let re = p instanceof RegExp ? // RegExp in Array?
                    p:
                    new RegExp(str2Regex(p))
                    return [re.exec(m.text), re]
                }):
                typeof _prefix === 'string' ? // String?
                [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]:
                [[[], new RegExp]]
            ).find(p => p[1])
            if (typeof plugin.before === 'function') {
                if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }))
                continue
            }
            if (typeof plugin !== 'function')
                continue
            if ((usedPrefix = (match[0] || '')[0])) {
                let noPrefix = m.text.replace(usedPrefix, '')
                let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                args = args || []
                let _args = noPrefix.trim().split` `.slice(1)
                let text = _args.join` `
                command = (command || '').toLowerCase()
                let fail = plugin.fail || global.dfail // When failed
                let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                plugin.command.test(command):
                Array.isArray(plugin.command) ? // Array?
                plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) : cmd === command) : typeof plugin.command === 'string' ? // String?
                plugin.command === command : false

                if (!isAccept)
                    continue
                m.plugin = name
                if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                    let chat = global.db.data.chats[m.chat]
                    let user = global.db.data.users[m.sender]
                    if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && name != 'mode-bot.js' && chat?.isBanned)
                        return
                    if (name != 'owner-unbanuser.js' && name != 'cek-banned.js' && user?.banned)
                        return
                }
                if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.rowner && !isROwner) {
                    fail('rowner', m, this)
                    continue
                }
                if (plugin.owner && !isOwner) {
                    fail('owner', m, this)
                    continue
                }
                if (plugin.mods && !isMods) {
                    fail('mods', m, this)
                    continue
                }
                if (plugin.premium && !isPrems) {
                    fail('premium', m, this)
                    continue
                }
                if (plugin.group && !m.isGroup) {
                    fail('group', m, this)
                    continue
                } else if (plugin.botAdmin && !isBotAdmin) {
                    fail('botAdmin', m, this)
                    continue
                } else if (plugin.admin && !isAdmin) {
                    fail('admin', m, this)
                    continue
                }
                if (plugin.private && m.isGroup) {
                    fail('private', m, this)
                    continue
                }
                if (plugin.register && !_user.registered) {
                    fail('unreg', m, this)
                    continue
                }
                if (plugin.onlyprem && !m.isGroup && !isPrems) {
                    fail('onlyprem', m, this)
                    continue
                }
                if (plugin.rpg && m.isGroup && !global.db.data.chats[m.chat].rpg) {
                    fail('rpg', m, this)
                    continue
                }
                if (plugin.game && m.isGroup && !global.db.data.chats[m.chat].game) {
                    fail('game', m, this)
                    continue
                }
                if (plugin.nsfw && m.isGroup && !global.db.data.chats[m.chat].nsfw) {
                    fail('nsfw', m, this)
                    continue
                }
                m.isCommand = true
                let xp = 'exp' in plugin ? parseInt(plugin.exp): 17 // XP Earning per command
                if (xp > 200)
                    m.reply('Ngecit -_-') // Hehehe
                else
                    m.exp += xp
                if (plugin.limit && !isPrems && _user.limit < plugin.limit * 1) {
                	fail('limitExp', m, this)
                    continue
                }
                if (plugin.level > _user.level) {
                	this.reply(m.chat, `[💬] Mohon maaf level yang di perlukan untuk menggunakan fitur ini ${plugin.level}\n*Level mu:* ${_user.level} 📊`, m, {
                        contextInfo: {
                            externalAdReply: {
                            title: '✘ AKSES DITOLAK', body: wm, sourceUrl: link.web, thumbnail: fs.readFileSync('./media/denied.jpg')
                            }
                        }
                	})
                    continue
                }
                if (plugin.age > _user.age) {
                	this.reply(m.chat, `[💬] Umurmu harus diatas ${plugin.age} Tahun untuk menggunakan fitur ini...`, m, {
                        contextInfo: {
                            externalAdReply: {
                            title: '✘ AKSES DITOLAK', body: wm, sourceUrl: link.web, thumbnail: fs.readFileSync('./media/denied.jpg')
                            }
                        }
                  })	
                    continue
                }
                let extra = {
                    match,
                    usedPrefix,
                    noPrefix,
                    _args,
                    args,
                    command,
                    text,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                    __dirname: ___dirname,
                    __filename
                }
                try {
                    await plugin.call(this, m, extra)
                    if (!isPrems)
                        m.limit = m.limit || plugin.limit || false
                } catch (e) {
                    // Error occured
                    m.error = e
                    console.error(e)
                    if (e) {
                        let text = format(e)
                        for (let key of Object.values(global.APIKeys))
                            text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                        if (e.name)
                            for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                            let data = (await conn.onWhatsApp(jid))[0] || {}
                            if (data.exists)
                                m.reply(`Hallow sayang, ada surat cinta nih\n\n*${m.plugin}*\nCommand *${usedPrefix}${command} ${args.join(' ')}*\n\n> ${text}`.trim(), data.jid)
                        }
                        m.reply(text)
                    }
                } finally {
                    // m.reply(util.format(_user))
                    if (typeof plugin.after === 'function') {
                        try {
                            await plugin.after.call(this, m, extra)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    if (m.limit)
                       await conn.sendMessage(m.chat, {
                       text: '⛩️ Kamu Menggunakan Fitur Limit',
                       contextInfo: {
                       externalAdReply: {
                       title: `Limit kamu berkurang`,
                       body: ``,
                       sourceUrl: sgc,
                       thumbnailUrl: fotonya2,
                       mediaType: 1,
                       renderLargerThumbnail: true
                  }}})/// lain kali jangan lupa tanda kurung nya ya! ... fixed by Fokusdotid (Fokus ID)
                }
                break
            }
        }
    } catch (e) {
        console.error(e)
    } finally {
        if (opts['queque'] && m.text) {
            const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (quequeIndex !== -1)
                this.msgqueque.splice(quequeIndex, 1)
        }
        //console.log(global.db.data.users[m.sender])
        let user,
        stats = global.db.data.stats
        if (m) {
            if (m.sender && (user = global.db.data.users[m.sender])) {
                user.exp += m.exp
                user.limit -= m.limit * 1
            }

            let stat
            if (m.plugin) {
                let now = +new Date
                if (m.plugin in stats) {
                    stat = stats[m.plugin]
                    if (!isNumber(stat.total))
                        stat.total = 1
                    if (!isNumber(stat.success))
                        stat.success = m.error != null ? 0: 1
                    if (!isNumber(stat.last))
                        stat.last = now
                    if (!isNumber(stat.lastSuccess))
                        stat.lastSuccess = m.error != null ? 0: now
                } else
                    stat = stats[m.plugin] = {
                    total: 1,
                    success: m.error != null ? 0: 1,
                    last: now,
                    lastSuccess: m.error != null ? 0: now
                }
                stat.total += 1
                stat.last = now
                if (m.error == null) {
                    stat.success += 1
                    stat.lastSuccess = now
                }
            }
        }

        try {
            if (!opts['noprint']) await printMessage(m, this)
        } catch (e) {
            console.log(m, m.quoted, e)
        }
        if (global.db.data.settings[this.user.jid].autoread)
            await this.readMessages([m.key]).catch(() => {})

        if (global.db.data.settings[this.user.jid].composing)
            await this.sendPresenceUpdate('composing', m.chat).catch(() => {})
    }
}

/**
* Handle groups participants update
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate
*/
export async function participantsUpdate({ id, participants, action }) {
    if (opts['self'])
        return
    if (this.isInit)
        return
    if (global.db.data == null)
        await loadDatabase()
    let chat = global.db.data.chats[id] || {}
    let text = ''
    switch (action) {
        case 'add':
        case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
                    let pp = './src/avatar_contact.png'
                    try {
                        pp = await this.profilePictureUrl(user, 'image')
                    } catch (e) {
                    } finally {
                        text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'unknow') :
                            (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', await this.getName(user))
let wel = 'https://telegra.ph/file/f82218075a0986c430acf.jpg'
let lea = 'https://telegra.ph/file/919591feb232790a9f4c9.jpg'
 
                        this.sendFile(id, action === 'add' ? wel : lea, 'pp.jpg', text, null, false, { mentions: [user] })
                    }
                }
            }
                break
            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
                case 'demote':
                    if (!text)
                        text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
                    text = text.replace('@user', '@' + participants[0].split('@')[0])
                    if (chat.detect)
                        this.sendMessage(id, {
                        text, mentions: this.parseMention(text)
                        }, m)
                    break
        }
}
/**
* Handle groups update
* @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate
*/
export async function groupsUpdate(groupsUpdate) {
    if (opts['self'])
        return
     for (const groupUpdate of groupsUpdate) {
        const id = groupUpdate.id
        if (!id) continue
        let chats = global.db.data.chats[id],
        text = ''
        if (!chats?.detect) continue
        if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
        if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
        if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
        if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
        if (!text) continue
        await this.sendMessage(id, { text, mentions: this.parseMention(text) }, m)
    }
}

export async function deleteUpdate(message) {
    try {
        const { fromMe, id, participant } = message
        if (fromMe)
            return
        let msg = this.serializeM(this.loadMessage(id))
        if (!msg)
            return
        let chat = global.db.data.chats[msg.chat] || {}
        if (chat.delete)
            return
        await this.reply(msg.chat, `
⧻Terdeteksi @${participant.split`@`[0]}
Telah menghapus pesan!
`.trim(), msg, { mentions: [participant] })
        this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
    } catch (e) {
        console.error(e)
    }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'Ups, command ini hanya bisa di gunakan oleh kesayangannya aku ( Frhn )',
    owner: 'Ups, command ini hanya bisa di gunakan oleh kesayangannya aku ( Frhn )',
    mods: 'Ups, command ini hanya bisa di gunakan oleh kesayangannya aku ( Frhn )',
    premium: 'Ups, command ini hanya bisa di gunakan oleh users *Premium*. Beli prem dulu sana!',
    group: 'Ups, command ini hanya bisa di gunakan di *Group*. Pakenya jangan di pc ya!',
    private: 'Ups, command ini hanya bisa di gunakan di *Private Chat*. Chat pribadi aku ya kak!',
    admin: 'Ups, command ini hanya bisa di gunakan oleh *Admin*. Kamu member jangan so asik!',
    botAdmin: 'Ups, bot bukan *Admin*. Harap jadikan bot admin group',
    onlyprem: 'Ups, hanya user *Premium* yang bisa menggunakan command ini',
    nsfw: 'Yah, admin menonaktifkan fitur *Nsfw*. Tidak akan ada bokep lagi disini :(',
    rpg: 'Yah, admin menonaktifkan fitur *Rpg*.',
    game: 'Yah, admin menonaktifkan fitur *Game*.',
    limitExp: 'Maaf!, tapi *Limit* kamu sudah habis. Kamu harus mencari limit lagi, atau tidak menunggu hingga besok sampai limit di reset',
    restrict: 'ꜰɪᴛᴜʀ ɪɴɪ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ !!'
  }[type]

  if (msg) return conn.reply(m.chat, msg, m)
  let msgg = {
    unreg: `⛩️ *Registrasi Diperlukan* \n–“🍁”𝙷𝚊𝚛𝚊𝚙 𝚁𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚜𝚒 𝚃𝚎𝚛𝚕𝚎𝚋𝚒𝚑 𝙳𝚊𝚑𝚞𝚕𝚞 𝚄𝚗𝚝𝚞𝚔 𝙳𝚊𝚙𝚊𝚝 𝙼𝚎𝚗𝚐𝚐𝚞𝚗𝚊𝚔𝚊𝚗 𝙵𝚒𝚝𝚞𝚛 𝚄𝚛𝚎𝚜𝚑𝚒𝚒𝙱𝚘𝚝𝚣.\n\n☁️ *Cara registrasi:* \n.𝚍𝚊𝚏𝚝𝚊𝚛𝚗𝚊𝚖𝚊.𝚞𝚖𝚞𝚛\n\n☁️ *Contoh:* \n.𝚍𝚊𝚏𝚝𝚊𝚛𝙵𝚊𝚛𝚑𝚊𝚗𝚗.20`
  }[type]

  if (msgg) return conn.sendMessage(m.chat, {
    text: msgg,
    contextInfo: {
      externalAdReply: {
        title: "UreshiiBotz | © Frhn",
        thumbnailUrl: "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=Daftar",
        sourceUrl: sgc,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, {
    quoted: m
  })
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

global.thumbdoc = 'https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg'
global.logo = 'https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg'
global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.thumb = 'https://telegra.ph/file/2e8d2ef0926e848626a43.jpg' 
global.imagebot = 'https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg'
global.giflogo = 'https://telegra.ph/file/d99857d74715351bdcd6c.mp4'
global.zykomd = 'https://telegra.ph/file/568a7bba190f80c9f5cc6.mp4'
global.thumbs = ['https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg']
global.hwaifu = ['https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg','https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg','https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg','https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg','https://telegra.ph/file/8b7dafb99fde2c3205a5b.jpg']
global.thumbnailUrl = [
  'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', 'https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
  'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg', 'https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
  'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg', 'https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
  'https://telegra.ph/file/55e5af5f33fbd57104187.jpg', 'https://telegra.ph/file/af236598456b95884bd15.jpg',
  'https://telegra.ph/file/de92ed4a729887ffc974c.jpg', 'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg', 'https://telegra.ph/file/2e8d2ef0926e848626a43.jpg'
]
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']
global.hoppai = ['https://telegra.ph/file/f34d76df4a2065af1a5ba.jpg','https://telegra.ph/file/05c1b22ee83bcd7723b4d.jpg','https://telegra.ph/file/1d886f66a44871205335f.jpg','https://telegra.ph/file/54d19a9094dc509370bf9.jpg','https://telegra.ph/file/e649475bcde78a9977ee5.jpg','https://telegra.ph/file/32ba20b6139b129c559c8.jpg','https://telegra.ph/file/948434cda49e4af5d9f11.jpg','https://telegra.ph/file/6f353c68533283fe79871.jpg','https://telegra.ph/file/de268ca9b01101acf2b8a.jpg','https://telegra.ph/file/fc6c5b2ae9a20c4256e7f.jpg', 'https://telegra.ph/file/efb70bb0988640f841742.jpg', 'https://telegra.ph/file/77d03fff530a2bcff3bf7.jpg','https://telegra.ph/file/6e4623464a659dd8d902b.jpg','https://telegra.ph/file/685aa39f0cb0f2c4fd85b.jpg','https://telegra.ph/file/10454b9ad693e1eefea58.jpg','https://telegra.ph/file/7de8ce5c290c3d8be0856.jpg','https://telegra.ph/file/8d7c4eadb7a4722747074.jpg','https://telegra.ph/file/ccc5f8eaac0f30919ef6c.jpg','https://telegra.ph/file/95f4b43439d7888f15ea5.jpg','https://telegra.ph/file/9c2a750db555bd2fad1f3.jpg', 'https://telegra.ph/file/efc5f7e637744fd6bfec2.jpg','https://telegra.ph/file/3a5231aade245665633bd.jpg','https://telegra.ph/file/2ecfc76feb26ec1eab99b.jpg','https://telegra.ph/file/dabb70983b4e833d98344.jpg','https://telegra.ph/file/75193a893e38fc580afe6.jpg','https://telegra.ph/file/217aa0f4ec76273808aa4.jpg','https://telegra.ph/file/8a35d3446b97ae22c7b23.jpg','https://telegra.ph/file/092df720701575a7ceaaa.jpg','https://telegra.ph/file/a65184a676cd648de34c3.jpg',
'https://telegra.ph/file/180e28807e78419d45537.jpg','https://telegra.ph/file/140eff27be983e0cd6781.jpg','https://telegra.ph/file/1581b791e16d0029e16b5.jpg','https://telegra.ph/file/6a4b36372b4f265bae3bc.jpg','https://telegra.ph/file/093caff422f194f00bc6c.jpg','https://telegra.ph/file/2294b7ab49eca8a8046b2.jpg','https://telegra.ph/file/869224d1c417e8b5c8ff1.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg','https://telegra.ph/file/1889878933264d16c58bf.jpg','https://telegra.ph/file/735aeb47d9c4aa87aaaf3.jpg','https://telegra.ph/file/fcf861516db09dda164e0.jpg','https://telegra.ph/file/355d96d7e06d109435f67.jpg']

let file = global.__filename(import.meta.url, true)
watchFile(file, async () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'handler.js'"))
if (global.reloadHandler) console.log(await global.reloadHandler())
})

function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? ??"
if (time >= 4) {
res = "Selamat Pagi"
}
if (time >= 10) {
res = "Selamat Siang"
}
if (time >= 15) {
res = "Selamat Sore"
}
if (time >= 18) {
res = "Selamat Malam"
}
return res
}               
