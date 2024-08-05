import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import knights from 'knights-canvas'

let handler = m => m
handler.all = async
function(m) {
    let name = await conn.getName(m.sender)
    let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    try {
        pp = await this.profilePictureUrl(m.sender, 'image')
    } catch (e) {} finally {

        //global.bg = await (await fetch(img)).buffer()
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf", "application/vnd.android.package-archive", "application/zip"])
        global.pic = 'https://ureshii.sirv.com/Images/IMG_20240324_220034.jpg'
        global.social = global.sgc

        // Module 
        global.fetch = (await import('node-fetch'))
            .
        default
        global.bochil = await import('@bochilteam/scraper')

        // Function
        global.pickRandom = function pickRandom(list) {
            return list[Math.floor(list.length * Math.random())]
        }

        global.getBuffer = async
        function getBuffer(url, options) {
            try {
                options ? options : {}
                var res = await axios({
                    method: "get",
                    url,
                    headers: {
                        'DNT': 1,
                        'User-Agent': 'GoogleBot',
                        'Upgrade-Insecure-Request': 1
                    },
                    ...options,
                    responseType: 'arraybuffer'
                })
                return res.data
            } catch (e) {
                console.log(`Error: $ {
                    e
                }`)
            }
        }

        const _uptime = process.uptime() * 1000

        // ucapan ini mah
        global.ucapan = ucapan()

        // pesan sementara
        global.ephemeral = '86400'

        global.adReply = {
            contextInfo: {
                forwardingScore: 9999,
                externalAdReply: {
                    showAdAttribution: true,
                    title: '',
                    body: 'UreshiiBotz — Frhn',
                    mediaUrl: sgc,
                    description: 'Simple WhatsApp Bot',
                    previewType: "PHOTO",
                    thumbnail: await(await fetch(pic))
                        .buffer(),
                    sourceUrl: ''
                }
            }
        }
        global.flocation = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                locationMessage: {
                    name: 'Indonesia',
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                }
            }
        }
        global.fkontak = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': wm,
                    'vcard': `BEGIN: VCARD\nVERSION: 3.0\nN: XL;
                    $ {
                        wm
                    }, ;;;\nFN: $ {
                        wm
                    },
                    \nitem1.TEL;
                    waid = $ {
                        m.sender.split('@')[0]
                    }: $ {
                        m.sender.split('@')[0]
                    }\nitem1.X - ABLabell: Ponsel\nEND: VCARD`,
                    'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'),
                    thumbnail: fs.readFileSync('./thumbnail.jpg'),
                    sendEphemeral: true
                }
            }
        }
        global.fvn = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "6285736178354-1625305606@g.us"
                } : {})
            },
            message: {
                "audioMessage": {
                    "mimetype": "audio/ogg; codecs=opus",
                    "seconds": "999999999999",
                    "ptt": "true"
                }
            }
        }

        global.ftextt = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "6285736178354-1625305606@g.us"
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": wm,
                    "title": wm,
                    'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                }
            }
        }

        global.fdocs = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                "documentMessage": {
                    "title": wm,
                    "jpegThumbnail": fs.readFileSync('./thumbnail.jpg')
                }
            }
        }

        global.fgclink = {
            "key": {
                "fromMe": false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "6285736178354-1625305606@g.us",
                    "inviteCode": "null",
                    "groupName": "UreshiiBotz",
                    "caption": wm,
                    'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                }
            }
        }
        global.fimg = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                imageMessage: {
                    url: pic,
                    mimetype: 'image/jpeg',
                    fileLength: fsizedoc,
                    height: 306,
                    width: 366,
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                }
            }
        }
        global.fimgv = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                imageMessage: {
                    url: pic,
                    mimetype: 'image/jpeg',
                    fileLength: fsizedoc,
                    height: 306,
                    width: 366,
                    jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                    viewOnce: true
                }
            }
        }

        global.fgif = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: "6285736178354-1625305606@g.us"
                } : {})
            },
            message: {
                "videoMessage": {
                    "title": wm,
                    "h": `Hmm`,
                    'seconds': '999999999',
                    'gifPlayback': 'true',
                    'caption': wm,
                    'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                }
            }
        }
        // Random Pick Fake
        let pft = [global.fimg, global.flocation, global.fimgv, global.fvn, global.fvid, global.ftextt, global.fdocs, global.fgclink, global.fgif]
        // Get Random
        global.fakes = pft.getRandom()

    }
}

export
default handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta')
        .format('HH')
    let res = "Malam Sayang"
    if (time >= 1) {
        res = "Km Ga Tidur?"
    }
    if (time >= 4) {
        res = "Pagi Sayang"
    }
    if (time > 10) {
        res = "Siang Sayang"
    }
    if (time >= 15) {
        res = "Sore Sayang"
    }
    if (time >= 18) {
        res = "Malam Sayang"
    }
    return res
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}