import { uploadImage } from '../lib/uploadImage'
import { uploadFile } from '../lib/uploadFile'
import fetch from 'node-fetch'
let handler = async (m, { conn,usedPrefix, command, args ,text}) => {  
try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto\n cara Gunainnya kayak Gini loh\nReply Foto atau sticker dengan caption\nmisal\n\n'+ `${usedPrefix+command}`
  if (!/image\/(jpe?g|png)|webp/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img).catch(e => uploadFile(img))
  let p = await (await fetch('https://tessyy-api.herokuapp.com/canvas/joke?url='+encodeURIComponent(url) )).buffer()
  m.reply('_Tunggu Sebentar. . ._')
  conn.sendFile(m.chat, p, 'image.png' , '*:)*', m)
  } catch (e) {
  m.reply (`apikey invalid atau server down`)} 
}
handler.help = ['joke']
handler.tags = ['sticker']
handler.command = /^joke$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
