import fetch from 'node-fetch';
import googleIt from 'google-it';

const handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command);
  let text = args.join` `;
  if (!text) return conn.reply(m.chat, `Format salah\nContoh: ${usedPrefix + command} apa itu titid`, m);
 m.react(rwait)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text);
  let search = await googleIt({ query: text });
  let msg = search.map(({ title, link, snippet }) => {
    return `*${title}*\n\n_${snippet}_\n\n${link}`;
  })
  try {
    var logos = 'https://telegra.ph/file/cf62f2b8648a352548978.jpg';
    conn.sendFile(m.chat, logos, 'logos.jpg', url + '\n\n' + msg, m);
  } catch (e) {
    m.reply(msg);
  }
};

handler.help = ['google', 'search'].map(v => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = ['google', 'search', 'srch'];
handler.register = true
handler.fail = null;

export default handler;