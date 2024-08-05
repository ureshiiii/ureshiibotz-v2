import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';
const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  await m.react(rwait)
  if (!text) throw `Contoh: ${usedPrefix}${command} naruto blue bird`;

  let search = await yts(text);
  let vid = search.videos[0];
  if (!search) throw 'Video tidak ditemukan';
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  let wm = 'Aku Sayang Farhann';

  let captvid = `*${title}*
    
⌛ ${timestamp}
🔭 ${views}
🌃 ${ago}
    
${url}`;

  await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, viewOnce: false, footer: author }, { quoted: m });
  await conn.sendMessage(m.chat, 'Sabar ya sayang.., audionya lagi aku download', { quoted: m });

  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`./tmp/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);
  let doc = {
    audio: {
      url: `./tmp/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: url,
        title: title,
        body: wm,
        sourceUrl: url,
        thumbnail: await (await conn.getFile(thumbnail)).data
      }
    }
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`./tmp/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = ['play'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(play|song|lagu|music)$/i;
handler.register = true

export default handler;