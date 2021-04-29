// SCRIPT BY FXSX 
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const util = require('util')
const { exec, spawn, execSync } = require("child_process")
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const imgbb = require('imgbb-uploader')
const { nyz } = require('./reply')
const axios = require('axios')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
//AWAS ERROR :V 
//SCRIPT BY FXSX
const setiker = JSON.parse(fs.readFileSync('./storage/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./storage/video.json'))
const audionye = JSON.parse(fs.readFileSync('./storage/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./storage/image.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/settings.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
prefix = setting.prefix
blocked = []
ban = []
apixteam = setting.apixteam
cr = setting.cr
tz = setting.tz
cr1 = setting.cr1
cr2 = setting.cr2
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
namebot = setting.namebot
ownername = setting.ownername
donasi = setting.donasi
l0lhuman = setting.l0lhuman
pulsa = setting.pulsa
// SCRIPT BY FXSX 
const antilink = JSON.parse(fs.readFileSync('./nuyfaa/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nuyfaa/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nuyfaa/antiwibu.json'))
const welkom = JSON.parse(fs.readFileSync('./nuyfaa/welkom.json'))
const antigay = JSON.parse(fs.readFileSync('./nuyfaa/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nuyfaa/antibocil.json'))
const neraka = JSON.parse(fs.readFileSync('./nuyfaa/neraka.json'))
// SCRIPT BY FXSX                   	                    	              
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }
// SCRIPT BY FXSX                   	    
            async function starts() {
        	const nuy = new WAConnection()
	        nuy.logger.level = 'warn'
	        console.log(banner.string)
        	nuy.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	        })
	        fs.existsSync('./self-bot.json') && nuy.loadAuthInfo('./self-bot.json')
	        nuy.on('connecting', () => {
		    start('2', 'Connecting...')
        	})
	        nuy.on('open', () => {
	    	success('2', 'Connected')
         	})
        	await nuy.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nuy.base64EncodedAuthInfo(), null, '\t'))
	        nuy.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	        }
        	})
// SCRIPT BY FXSX 
            nuy.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await nuy.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try {
			ppimg = await nuy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks = `✿➤ ʜᴀʟʟᴏ @${num.split('@')[0]}👋
✿➤ SELAMAT DATANG DI GRUP
✿➤ *${mdata.subject}*

✿➤「 *INTRO* 」

✿➤ *Nama* :
✿➤ *Umur* :
✿➤ *Gender* :
✿➤ *Askot* :

✿➤ Note Dari Admin
✿➤ Jangan Toxic/Sara
✿➤ Hargai Member Lain:),
✿➤ Patuhi Peraturan Di Deskripsi

✿➤ Untuk Memakai Manca Bot
✿➤ Ketik : ${prefix}daftar`
			let buff = await getBuffer(ppimg)
		    nuy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
			ppimg = await nuy.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
			let buff = await getBuffer(ppimg)
			nuy.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })
	        const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
            const faaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = faaBulan[moment().format('MM') - 1]
// SCRIPT BY FXSX 	        
	        nuy.on('chat-update', async (faa) => {
      		try {
            if (!faa.hasNewMessage) return
            faa = faa.messages.all()[0]
			if (!faa.message) return
			if (faa.key && faa.key.remoteJid == 'status@broadcast') return
			if (faa.key.fromMe) return
			global.prefix
			global.blocked		
			const content = JSON.stringify(faa.message)
			const from = faa.key.remoteJid
			const faa1 = {
            key: {
			fromMe: false, 
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
	     	},
     		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./menu/undef1.png`)
					},
					"title": fake1,
					"description": fake2,
					"currencyCode": 'USD',
					"priceAmount1000": '9999999',
					"retailerId": fake1,
					"productImageCount": '9999999',
				     },
			    	"businessOwnerJid": `0@s.whatsapp.net`
	     	      }
            	}
            }			
            const type = Object.keys(jri.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && jri.message.conversation.startsWith(prefix)) ? jri.message.conversation : (type == 'imageMessage') && jri.message.imageMessage.caption.startsWith(prefix) ? jri.message.imageMessage.caption : (type == 'videoMessage') && jri.message.videoMessage.caption.startsWith(prefix) ? jri.message.videoMessage.caption : (type == 'extendedTextMessage') && jri.message.extendedTextMessage.text.startsWith(prefix) ? jri.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && jri.message.conversation) ? jri.message.conversation : (type == 'imageMessage') && jri.message.imageMessage.caption ? jri.message.imageMessage.caption : (type == 'videoMessage') && jri.message.videoMessage.caption ? jri.message.videoMessage.caption : (type == 'extendedTextMessage') && jri.message.extendedTextMessage.text ? jri.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? jri.message.conversation : (type === 'extendedTextMessage') ? jri.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			const isCmd = body.startsWith(prefix)             
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nuy.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nuy.chats.all()
			const sender = isGroup ? jri.participant : jri.key.remoteJid
			const groupMetadata = isGroup ? await nuy.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false	
			const isNeraka = isGroup ? neraka.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
			pushname = nuy.contacts[sender] != undefined ? nuy.contacts[sender].vname || nuy.contacts[sender].notify : undefined						
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
		    const uyuy = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR *${command}* TIDAK TERDAFTAR DIDALAM MENU`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nuy.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nuy.sendMessage(from, teks, text, {quoted: faa1})
			}
			const nuyy = (teks) => {
				nuy.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nuy.sendMessage(hehe, teks, text)
			}			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nuy.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nuy.sendMessage(from, teks.trim(), extendedText, {quoted: jri, contextInfo: {"mentionedJid": memberr}})
			}           			                               

            const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const nuy1 = ['1','2','3','4','5','6','7','8','9']
            const nuy2 = ['1','2','3','4','5','6','7','8','9'] 
            const nuy3 = nuy1[Math.floor(Math.random() * (nuy1.length))]
            const nuy4 = nuy2[Math.floor(Math.random() * (nuy2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
			const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT MANCA SELF`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	         
// SCRIPT BY FXSX 
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${ownername}\n` 
            + `ORG: Pengembang bot;\n`
             + 'TEL;type=CELL;type=VOICE;waid=6283815956151:+62 838-1595-6151\n'
            + 'END:VCARD' 
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
			if (messagesLink.includes('://chat.whatsapp.com/')){
	        if (!isGroup) return
	        if (!isAntiLink) return
	        if (isGroupAdmins) return reply('Admin Grup Mah Bebas^_°')
	        nuy.updatePresence(from, Presence.composing)
	        if (messagesLink.includes('#izinadmin')) return reply('#izinadmin *_「 ᴅɪᴛᴇʀɪᴍᴀ 」_*')
	        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		    reply(`*_「 ʟɪɴᴋ ɢʀᴜᴘ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ᴍᴇɴɢɪʀɪᴍ ʟɪɴᴋ ɢʀᴜᴘ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		    setTimeout( () => {
	        nuy.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		    }, 100)
		    setTimeout( () => {
		    nuy.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
	        }, 10)
		    setTimeout( () => {
		    reply(`*Take Of Otw Kick!*`)
		    }, 0)
		    }
		    if (messagesLink.includes('assalamualaikum')){
		    nuy.updatePresence(from, Presence.composing)
		    const loli = fs.readFileSync('./sound/waalaikumsalam.mp3')
            nuy.sendMessage(from, loli, MessageType.audio, {quoted: jri, mimetype: 'audio/mp4', ptt:true})
            }
            if (messagesLink.includes('manca')){
		    nuy.updatePresence(from, Presence.composing)
	    	const loli = fs.readFileSync('./sound/manca.mp3')
            nuy.sendMessage(from, loli, MessageType.audio, {quoted: jri, mimetype: 'audio/mp4', ptt:true})
            }
            if (messagesLink.includes('makasih')){
		    nuy.updatePresence(from, Presence.composing)
	    	const loli = fs.readFileSync('./sound/mksh.mp3')
            nuy.sendMessage(from, loli, MessageType.audio, {quoted: jri, mimetype: 'audio/mp4', ptt:true})
            }
            if (messagesLink.includes('bernyanyi')){
		    nuy.updatePresence(from, Presence.composing)
	    	const loli = fs.readFileSync('./sound/bernyanyi.mp3')
            nuy.sendMessage(from, loli, MessageType.audio, {quoted: jri, mimetype: 'audio/mp4', ptt:true})
            }
		    if (bad.includes(messagesLink)) {
            nuy.updatePresence(from, Presence.composing)
	     	const loli = fs.readFileSync('./sound/insaf.mp3')
            nuy.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
            const d = fs.readFileSync('./sticker/sesat.webp')
            nuy.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Tidak Baik Yah\nAdick Adick", 'jpegThumbnail': fs.readFileSync('./sticker/manca.webp')}}}})
            }
            if (bad.includes(messagesLink)) {
	    	if (!isGroup) return
	    	if (!isAntiLink) return
	    	if (isGroupAdmins) return reply(`*${pushname}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
	    	nuy.updatePresence(from, Presence.composing)
	    	var Kick = `${sender.split('@')[0]}@s.whatsapp.net`
		    setTimeout( () => {
	    	reply(`*Dadah Kang Toxic👋*`)
	    	}, 100)
		    setTimeout( () => {
		    nuy.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		    }, 10)
		    setTimeout( () => {
		    reply(`*_「 Badword Terdeteksi 」_*\n Maaf *${pushname}* Anda Berbicara Kotor!\nAnda Akan Segera Di Kick Dari Grup\n*${groupMetadata.subject}*`)
		    }, 0)
		    }
		
     	    if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

			switch (command) {
			  case 'help':
			  case 'menu':
			  if (isBanned) return reply(mess.only.benned)
              try {
              ppimg = await nuy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              ppimg = 'https://raw.githubusercontent.com/alonecans/terserah/main/bynuy.jpg'
              }
              captionnya = `╭──━─⸙MANCA SELF⸙
│*OWNER : ${ownername}*
│*AUTHOR : ${author}*
│*NAMEBOT : ${namebot}*
│*BULAN : ${bulan}*
│*CHAT : ${tchat}*
╰──━─────━───

╭──━─⸙RULES OKE⸙
│*JGN SPAM FITUR BOT*
│*JGN CALL BOT INI*
│*JGN TOXIC KE BOT*
│*JGN PLAGIAT BOT*
│*JGN CULIK BOT INI*
│*JGN MEMBANDING BOT*
╰──━─────━───

╭──━─⸙MENU MANCA⸙
│${tz} *${prefix}hidetag*
│${tz} *${prefix}chat*
│${tz} *${prefix}add*
│${tz} *${prefix}kick*
│${tz} *${prefix}bug*
│${tz} *${prefix}slot*
│${tz} *${prefix}antilink* on/off
│${tz} *${prefix}antibadword on/off
│${tz} *${prefix}welcome on/off
│${tz} *${prefix}antigay* 1/0
│${tz} *${prefix}antibocil* 1/0
│${tz} *${prefix}antiwibu* 1/0
╰──━─────━───
╭──━─⸙MENU DOWNLOAD⸙
│${tz} *${prefix}fb*
│${tz} *${prefix}steam*
│${tz} *${prefix}igfoto*
│${tz} *${prefix}igvideo*
│${tz} *${prefix}ytsearch*
│${tz} *${prefix}ytmp3*
│${tz} *${prefix}ytmp4*
│${tz} *${prefix}play*
│${tz} *${prefix}stalktwit*
│${tz} *${prefix}stalkgithub*
╰──━─────━───
╭──━─⸙MENU RANDOM⸙
│${tz} *${prefix}simi*
│${tz} *${prefix}hilih*
│${tz} *${prefix}jumlah*
│${tz} *${prefix}hurufkebalik*
│${tz} *${prefix}spamcall*
│${tz} *${prefix}spamemail*
│${tz} *${prefix}fakta*
│${tz} *${prefix}gcard*
│${tz} *${prefix}quotes*
│${tz} *${prefix}tebakgambar*
╰──━─────━───
╭──━─⸙MENU RANDOM⸙
│${tz} *${prefix}neko*
│${tz} *${prefix}quotesnime*
│${tz} *${prefix}kbbilazimedia*
│${tz} *${prefix}covid*
│${tz} *${prefix}wikiid*
│${tz} *${prefix}wikien*
│${tz} *${prefix}covidid*
│${tz} *${prefix}kbbi*
│${tz} *${prefix}infogempa*
│${tz} *${prefix}randomquran*
│${tz} *${prefix}kisanabi*
╰──━─────━───
╭──━─⸙MENU TEXT⸙
│${tz} *${prefix}8bit*
│${tz} *${prefix}burn*
│${tz} *${prefix}fire*
│${tz} *${prefix}google*
│${tz} *${prefix}battle*
│${tz} *${prefix}block*
│${tz} *${prefix}candy*
│${tz} *${prefix}potter*
│${tz} *${prefix}silk*
│${tz} *${prefix}water*
│${tz} *${prefix}pubg*
│${tz} *${prefix}neon*
│${tz} *${prefix}coffe1*
│${tz} *${prefix}coffe*
│${tz} *${prefix}tiktok*
│${tz} *${prefix}shadow*
│${tz} *${prefix}romance*
│${tz} *${prefix}glass*
│${tz} *${prefix}naruto*
│${tz} *${prefix}mug1*
│${tz} *${prefix}love*
│${tz} *${prefix}mug*
│${tz} *${prefix}neon1*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}artinama*
│${tz} *${prefix}artimimpi*
│${tz} *${prefix}artijadian*
│${tz} *${prefix}chord*
│${tz} *${prefix}lirik*
│${tz} *${prefix}sticker*
│${tz} *${prefix}stickergif*
│${tz} *${prefix}bc*
│${tz} *${prefix}clearall*
│${tz} *${prefix}linkgc*
│${tz} *${prefix}tagall*
│${tz} *${prefix}delete*
│${tz} *${prefix}ssweb*
│${tz} *${prefix}smoke*
│${tz} *${prefix}rainbow*
╰──━─────━───
╭──━─⸙MENU RANDOM⸙
│${tz} *${prefix}twich*
│${tz} *${prefix}loli*
│${tz} *${prefix}randomhusbu*
│${tz} *${prefix}fake*
│${tz} *${prefix}pinterest*
│${tz} *${prefix}qrcode*
│${tz} *${prefix}resepmasakan*
│${tz} *${prefix}barcode*
│${tz} *${prefix}cersex*
│${tz} *${prefix}cerpen*
│${tz} *${prefix}anime*
│${tz} *${prefix}anime1*
│${tz} *${prefix}yuri*
│${tz} *${prefix}tongue*
│${tz} *${prefix}jadwalsholat*
│${tz} *${prefix}pantun*
│${tz} *${prefix}cuaca*
│${tz} *${prefix}namaninja*
╰──━─────━───
╭──━─⸙MENU RANDOM⸙
│${tz} *${prefix}randomwaifu*
│${tz} *${prefix}randomwaifu1*
│${tz} *${prefix}neko1*
│${tz} *${prefix}kusonime*
│${tz} *${prefix}renungan*
│${tz} *${prefix}samehadaku*
│${tz} *${prefix}neon1*
│${tz} *${prefix}text3d*
│${tz} *${prefix}galaxy*
│${tz} *${prefix}gaming*
│${tz} *${prefix}colors*
│${tz} *${prefix}kling*
│${tz} *${prefix}infonomer*
│${tz} *${prefix}jadwaltv*
│${tz} *${prefix}tvjadwal*
│${tz} *${prefix}fml*
│${tz} *${prefix}cinta*
╰──━─────━───
╭──━─⸙MENU RANDOM⸙
│${tz} *${prefix}igstalk*
│${tz} *${prefix}estetikpic*
│${tz} *${prefix}memeindo*
│${tz} *${prefix}darkjokes*
│${tz} *${prefix}nickff*
│${tz} *${prefix}tahta*
│${tz} *${prefix}neon2*
│${tz} *${prefix}wall*
│${tz} *${prefix}wolf*
│${tz} *${prefix}tfire*
│${tz} *${prefix}ytgold*
│${tz} *${prefix}ytsilver*
│${tz} *${prefix}t3d*
│${tz} *${prefix}logoa*
│${tz} *${prefix}pornhub*
│${tz} *${prefix}marvel*
│${tz} *${prefix}leavest*
│${tz} *${prefix}phcoment*
│${tz} *${prefix}nulis*
│${tz} *${prefix}urlshort*
│${tz} *${prefix}shortener*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}fox*
│${tz} *${prefix}dog*
│${tz} *${prefix}cat*
│${tz} *${prefix}panda*
│${tz} *${prefix}panda1*
│${tz} *${prefix}bird*
│${tz} *${prefix}koala*
│${tz} *${prefix}meme* 
│${tz} *${prefix}kapankah*
│${tz} *${prefix}apakah* 
╰──━─────━───
╭──━─⸙MENU WALLPAPER⸙
│${tz} *${prefix}wallteknologi*
│${tz} *${prefix}wallhacker*
│${tz} *${prefix}wallcyber*
│${tz} *${prefix}wallmuslim*
│${tz} *${prefix}wallpegunungan*
│${tz} *${prefix}caklontong*
│${tz} *${prefix}robot*
│${tz} *${prefix}3dwhite*
│${tz} *${prefix}daun*
│${tz} *${prefix}metal1*
│${tz} *${prefix}metal*
│${tz} *${prefix}scary*
│${tz} *${prefix}imo*
│${tz} *${prefix}wallpaper*
│${tz} *${prefix}quotes2*
│${tz} *${prefix}quotes1*
╰──━─────━───
╭──━─⸙MENU STORAGE⸙
│${tz} *${prefix}toimg*
│${tz} *${prefix}readmore*
│${tz} *${prefix}chatlist*
│${tz} *${prefix}adds*
│${tz} *${prefix}slist*
│${tz} *${prefix}gs*
│${tz} *${prefix}addvn*
│${tz} *${prefix}vnlist*
│${tz} *${prefix}gvn*
│${tz} *${prefix}addimg*
│${tz} *${prefix}imglist*
│${tz} *${prefix}gimg*
│${tz} *${prefix}addvid*
│${tz} *${prefix}vidlist*
│${tz} *${prefix}gvid*
╰──━─────━───
╭──━─⸙MENU SOUND⸙
│${tz} assalamualaikum
│${tz} manca
╰──━─────━───
╭──━─⸙MANCA ASUPAN⸙
│${tz} *${prefix}asupan*
│${tz} *${prefix}asupan1*
│${tz} *${prefix}asupan2*
│${tz} *${prefix}ngakak*
│${tz} *${prefix}nulis1*
│${tz} *${prefix}nulis2*
│${tz} *${prefix}nulis3*
│${tz} *${prefix}nulis4*
│${tz} *${prefix}nulis5*
│${tz} *${prefix}nulis6*
│${tz} *${prefix}video1*
│${tz} *${prefix}video2*
│${tz} *${prefix}video3*
│${tz} *${prefix}video4*
│${tz} *${prefix}video5*
│${tz} *${prefix}video6*
╰──━─────━───
╭──━─⸙MENU OTW NERAKA⸙
│${tz} *${prefix}neraka 1/0
│${tz} *${prefix}orgy*                     
│${tz} *${prefix}nsfwneko*
│${tz} *${prefix}mstrb* 
│${tz} *${prefix}manga* 
│${tz} *${prefix}jahy* 
│${tz} *${prefix}hentaigif* 
│${tz} *${prefix}hentai* 
│${tz} *${prefix}glasses*
│${tz} *${prefix}gangbang* 
│${tz} *${prefix}ero* 
│${tz} *${prefix}cuckold* 
│${tz} *${prefix}blowjob* 
│${tz} *${prefix}bdsm* 
│${tz} *${prefix}ass* 
│${tz} *${prefix}ahegao* 
│${tz} *${prefix}zettairyouiki* 
│${tz} *${prefix}wpnsfwmobile* 
│${tz} *${prefix}wpmobile* 
│${tz} *${prefix}wallpaper*
│${tz} *${prefix}thighs* 
│${tz} *${prefix}uniform*
│${tz} *${prefix}tentacles* 
│${tz} *${prefix}sfwneko* 
│${tz} *${prefix}pussy* 
│${tz} *${prefix}panties* 
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}naruto* 
│${tz} *${prefix}mikasa* 
│${tz} *${prefix}eren*  
│${tz} *${prefix}titan*  
│${tz} *${prefix}levi*  
│${tz} *${prefix}sakura*  
│${tz} *${prefix}hinata*  
│${tz} *${prefix}neji*  
│${tz} *${prefix}minato*  
│${tz} *${prefix}jiraya*  
│${tz} *${prefix}tsunade*  
│${tz} *${prefix}kiba*  
│${tz} *${prefix}boruto*  
│${tz} *${prefix}sarada*  
│${tz} *${prefix}sasuke*  
│${tz} *${prefix}madara*  
│${tz} *${prefix}obito*  
│${tz} *${prefix}obito*  
│${tz} *${prefix}tanjiro*  
│${tz} *${prefix}nezuko*  
│${tz} *${prefix}luffy*  
│${tz} *${prefix}zoro*  
│${tz} *${prefix}sanji* 
│${tz} *${prefix}gon*  
│${tz} *${prefix}killua*  
│${tz} *${prefix}sagiri*  
│${tz} *${prefix}natsu*  
│${tz} *${prefix}genos*  
│${tz} *${prefix}saitama*  
│${tz} *${prefix}miku*                   
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}pin* 
│${tz} *${prefix}foto* 
│${tz} *${prefix}ramalnomer* 
│${tz} *${prefix}ramalcinta* 
│${tz} *${prefix}jodohbali* 
│${tz} *${prefix}ramalnikah* 
│${tz} *${prefix}taksirmimpi* 
│${tz} *${prefix}suit*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}maker1*                   
│${tz} *${prefix}maker2*                   
│${tz} *${prefix}maker3*                   
│${tz} *${prefix}maker4*                   
│${tz} *${prefix}maker5*                   
│${tz} *${prefix}maker6*                   
│${tz} *${prefix}maker7*                   
│${tz} *${prefix}maker8*                   
│${tz} *${prefix}maker9*                   
│${tz} *${prefix}maker10*                   
│${tz} *${prefix}maker11*                   
│${tz} *${prefix}maker12*                   
│${tz} *${prefix}maker13*                   
│${tz} *${prefix}maker14*                   
│${tz} *${prefix}maker15*                   
│${tz} *${prefix}maker16*                   
│${tz} *${prefix}maker17*                   
│${tz} *${prefix}maker18*                   
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}maker19*                   
│${tz} *${prefix}maker20*         
│${tz} *${prefix}maker21*                   
│${tz} *${prefix}maker22*                   
│${tz} *${prefix}maker23*                   
│${tz} *${prefix}maker24*                   
│${tz} *${prefix}maker25*                   
│${tz} *${prefix}maker26*                   
│${tz} *${prefix}maker27*                   
│${tz} *${prefix}maker28*                   
│${tz} *${prefix}maker29*                   
│${tz} *${prefix}maker30*         
│${tz} *${prefix}maker31*                   
│${tz} *${prefix}maker32*                   
│${tz} *${prefix}maker33*                   
│${tz} *${prefix}maker34*                   
│${tz} *${prefix}maker35*                   
│${tz} *${prefix}maker36*                   
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}maker37*                   
│${tz} *${prefix}maker38*                   
│${tz} *${prefix}maker39*                   
│${tz} *${prefix}maker40*         
│${tz} *${prefix}maker41*                   
│${tz} *${prefix}maker42*                   
│${tz} *${prefix}maker43*                   
│${tz} *${prefix}maker44*                   
│${tz} *${prefix}maker45*                   
│${tz} *${prefix}maker46*                   
│${tz} *${prefix}maker47*                   
│${tz} *${prefix}maker48*                   
│${tz} *${prefix}maker49*                   
│${tz} *${prefix}maker50*         
│${tz} *${prefix}maker51*                   
│${tz} *${prefix}maker52*                   
│${tz} *${prefix}maker53*                   
│${tz} *${prefix}maker54*                   
│${tz} *${prefix}maker55*                   
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}nama*                   
│${tz} *${prefix}maker57*                   
│${tz} *${prefix}maker58*                   
│${tz} *${prefix}maker59*                   
│${tz} *${prefix}maker60*         
│${tz} *${prefix}maker61*                   
│${tz} *${prefix}maker62*                   
│${tz} *${prefix}maker63*                   
│${tz} *${prefix}maker64*                   
│${tz} *${prefix}maker65*                   
│${tz} *${prefix}maker66*                   
│${tz} *${prefix}maker67*                   
│${tz} *${prefix}maker68*                   
│${tz} *${prefix}maker69*                   
│${tz} *${prefix}maker70*         
│${tz} *${prefix}maker71*                   
│${tz} *${prefix}maker72*                   
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}boomtext*
│${tz} *${prefix}holoh*
│${tz} *${prefix}heleh*
│${tz} *${prefix}huluh*
│${tz} *${prefix}hilih*
│${tz} *${prefix}halah*
│${tz} *${prefix}simi*
│${tz} *${prefix}kapital*
│${tz} *${prefix}textfont*
│${tz} *${prefix}bts*
│${tz} *${prefix}exo*
│${tz} *${prefix}blackpink*
│${tz} *${prefix}citacita*
│${tz} *${prefix}attp*
│${tz} *${prefix}katailham*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}gantengcek*
│${tz} *${prefix}cantikcek*
│${tz} *${prefix}jelekcek*
│${tz} *${prefix}goblokcek*
│${tz} *${prefix}begocek*
│${tz} *${prefix}pintercek*
│${tz} *${prefix}jagocek*
│${tz} *${prefix}nolepcek*
│${tz} *${prefix}babicek*
│${tz} *${prefix}bebancek*
│${tz} *${prefix}baikcek*
│${tz} *${prefix}jahatcek*
│${tz} *${prefix}anjingcek*
│${tz} *${prefix}haramcek*
│${tz} *${prefix}pakboycek*
│${tz} *${prefix}pakgirlcek*
│${tz} *${prefix}sangecek*
│${tz} *${prefix}bapercek*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}phkomen*
│${tz} *${prefix}semoji*
│${tz} *${prefix}nhentai*
│${tz} *${prefix}telesticker*
│${tz} *${prefix}tiktokmusic*
│${tz} *${prefix}tiktoknowm*
│${tz} *${prefix}manga1*
│${tz} *${prefix}character*
│${tz} *${prefix}ttp4*
│${tz} *${prefix}ttp3*
│${tz} *${prefix}ttp2*
│${tz} *${prefix}ttp1*
│${tz} *${prefix}laut*
│${tz} *${prefix}darat*
│${tz} *${prefix}udara*
│${tz} *${prefix}tebak*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}art*
│${tz} *${prefix}bts*
│${tz} *${prefix}exo*
│${tz} *${prefix}elf*
│${tz} *${prefix}loli*
│${tz} *${prefix}neko*
│${tz} *${prefix}waifu*
│${tz} *${prefix}shota*
│${tz} *${prefix}husbu*
│${tz} *${prefix}sagiri*
│${tz} *${prefix}shinobu*
│${tz} *${prefix}megumin*
│${tz} *${prefix}wallnime*                                   
│${tz} *${prefix}bj*
│${tz} *${prefix}ero*
│${tz} *${prefix}cum*
│${tz} *${prefix}feet*
│${tz} *${prefix}yuri*
│${tz} *${prefix}trap*
│${tz} *${prefix}lewd*
│${tz} *${prefix}feed*
│${tz} *${prefix}eron*
│${tz} *${prefix}solo*
│${tz} *${prefix}gasm*
│${tz} *${prefix}poke*
│${tz} *${prefix}anal*
│${tz} *${prefix}holo*
╰──━─────━───
╭──━─⸙MANCA SELF⸙
│${tz} *${prefix}tits*
│${tz} *${prefix}kuni*
│${tz} *${prefix}kiss*
│${tz} *${prefix}erok*
│${tz} *${prefix}smug*
│${tz} *${prefix}baka*
│${tz} *${prefix}solog*
│${tz} *${prefix}feetg*
│${tz} *${prefix}lewdk*
│${tz} *${prefix}waifu*
│${tz} *${prefix}pussy*
│${tz} *${prefix}femdom*
│${tz} *${prefix}cuddle*
│${tz} *${prefix}hentai*
│${tz} *${prefix}eroyuri*
│${tz} *${prefix}cum_jpg*
│${tz} *${prefix}blowjob*
│${tz} *${prefix}erofeet*
│${tz} *${prefix}holoero*
│${tz} *${prefix}classic*
│${tz} *${prefix}erokemo*
│${tz} *${prefix}fox_girl*
│${tz} *${prefix}futanari*
│${tz} *${prefix}lewdkemo*
│${tz} *${prefix}wallpaper*
│${tz} *${prefix}pussy_jpg*
│${tz} *${prefix}kemonomimi*
│${tz} *${prefix}nsfw_avatar*
╰──━─────━───
╭──━─⸙THANKS TO⸙
│${tz} FXSX
│${tz} TYPES/FDL
╰──━─────━───`
menu = await getBuffer(ppimg)
nuy.sendMessage(from, menu, image, {quoted: faa1, caption: captionnya})
                    break
                    case 'donasi':
                    donasi1 = `[ *${donasi}* ]\n`
                    donasi1 += `➻ *PULSA* : ${pulsa}\n`
                    reply(donasi1)
                    break
		            case 'play':
		            if (isBanned) return reply(mess.only.benned)
		            if (args.length < 1) return reply('MASUKKAN JUDUL LAGU') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
		            anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${body.slice(6)}`, {method: 'get'})
		            anu1 = await getBuffer(anu.thumb)
		            anu2 = `➻ *JUDUL* : ${anu.title}\n`
		            anu2 += `➻ *UPLOAD* : ${anu.uploaded}\n`
		            anu2 += `➻ *DURASI* : ${anu.duration}\n`
		            anu2 += `➻ *VIEW* : ${anu.total_view}\n`
		            anu2 += `➻ *CHANNEL* : ${anu.channel}\n`
		            anu2 += `➻ *SIZE* : ${anu.filesize}\n`
		            anu3 = await getBuffer(anu.link)
		            nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1})
		            nuy.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.title}`, quoted: faa1})
		            break
		            case 'ytmp3':
		            if (isBanned) return reply(mess.only.benned)
		            if (args.length < 1) return reply('MASUKKAN LINK YT') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
		            anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${body.slice(7)}`, {method: 'get'})
		            anu1 = await getBuffer(anu.thumb)
		            anu2 = `➻ *JUDUL* : ${anu.title}\n`
		            anu2 += `➻ *SIZE* : ${anu.filesize}\n`		           		 
		            anu3 = await getBuffer(anu.result)
		            nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1})
		            nuy.sendMessage(from, anu3, audio, {mimetype: 'audio/mp4', filename: `${anu.title}`, quoted: faa1})
		            break
		            case 'ytmp4':
		            if (isBanned) return reply(mess.only.benned)
		            if (args.length < 1) return reply('MASUKKAN LINK YT') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
		            anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ytmp3?url=${body.slice(7)}`, {method: 'get'})
		            anu1 = await getBuffer(anu.thumb)
		            anu2 = `➻ *JUDUL* : ${anu.title}\n`
		            anu2 += `➻ *SIZE* : ${anu.filesize}\n`		           		 
		            anu3 = await getBuffer(anu.result)
		            nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1})
		            nuy.sendMessage(from, anu3, video, {mimetype: 'video/mp4', filename: `${anu.title}`, quoted: faa1})
		            break
                    case 'stalktwit':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					costum('[❗] PROSES LOADING', text, tescuk, cr) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➻ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    nuy.sendMessage(from, anu1, image,{caption: anu2, quoted: faa1})
                    break
                    case 'stalkgithub':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN USERNAME') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➻ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    nuy.sendMessage(from, anu1, image,{caption: anu2, quoted: faa1})
                    break
                    case 'steam':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN JUDUL') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    nuy.sendMessage(from, anu1, text,{quoted: faa1})
                    break 
                    case 'fb':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN LINK') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    nuy.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: faa1})
                    break 
                    case 'igfoto':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN LINK') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    nuy.sendMessage(from, anu2, text, {quoted: faa1})
                    anu3 = await getBuffer(anu.result.image_text)
                    nuy.sendMessage(from, anu3, image, {quoted: faa1})
                    break
                    case 'igvideo':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN LINK') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nuy.sendMessage(from, anu2, text, {quoted: faa1})
                    anu3 = await getBuffer(anu.result.video)
                    nuy.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: faa1})
                    break                          
                    case 'ytsearch':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN LINK') 
					costum('[❗] PROSES LOADING', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `➻ *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `➻ *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `➻ *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `➻ *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `➻ *DESK* : ${anu.result.data.description}\n`  
                    nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1})
                    break    
// SCRIPT BY FXSX                                         
                    case 'hurufkebalik':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break    
                    case 'jumlah':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break       
                    case 'hilih':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN TEXT') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break 
// SCRIPT BY FXSX 
                    case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🥴`
                    reply(N)
                    break  
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nuy3}${nuy4}%* 😘`
                    reply(N)
                    break                   
// SCRIPT BY FXSX                                                              
                    case 'spamemail':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN EMAIL&NOMER&PESAN') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
                    case 'spamcall':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN NOMER') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
                    case 'quotes':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break
                    case 'fakta':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break                                                  
                    case 'gcard':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break                                                                                                                                                                                                                                                                                        
                    case 'tebakgambar':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nuy.sendMessage(from, anu1, image,{caption: 'JAWAB KAK... WAKTU 60 DETIK', quoted: faa1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nuy.sendMessage(from, anu2, text,{quoted: faa1})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           
// SCRIPT BY FXSX                                          
                    case 'neko':
                    if (isBanned) return reply(mess.only.benned)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                    anu = await fetchJson(`https://videfikri.com/api/anime/neko`)
                    anu1 = await getBuffer(anu.result.url_gbr)
                    nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                    break
                    case 'quotesnime':
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    break
// SCRIPT BY FXSX                                          
                   case 'lazimedia':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply('MASUKKAN NAMA PRODUK')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
                   case 'covid':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
                   case 'wikiid':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   nuy.sendMessage(from, anu1, text,{quoted: faa1})
                   break  
                   case 'wikien':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply('MASUKKAN QUERY') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   nuy.sendMessage(from, anu1, text,{quoted: faa1})
                   break   
                   case 'covidid':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
                   case 'kbbi':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply('MASUKKAN QUERY')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
                   case 'infogempa':                    
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nuy.sendMessage(from, anu1, text,{quoted: faa1})
                   break
                   case 'randomquran':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nuy.sendMessage(from, anu1, text,{quoted: faa1})
                   break                    
// SCRIPT BY FXSX                     
                   case '8bit':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu&aku*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'google':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} kamu & aku & dia*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                   case 'fire':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                   case 'burn':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                   case 'battle':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                   case 'mug':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                    case 'love':
                    if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                   break 
                   case 'mug1':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                   break 
                   case 'naruto':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                   break 
                   case 'glass':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                   break 
                   case 'romance':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                   break 
                   case 'shadow':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                   case 'tiktok':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'coffe':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break  
                   case 'coffe1':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'neon':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break  
                   case 'pubg':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'water':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break 
                   case 'silk':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot & whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'potter':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'candy':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break                     
                   case 'block':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
// SCRIPT BY FXSX                     
                    case 'artinama':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
                    case 'artimimpi':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
                    case 'artijadian':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
                    case 'chord':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
                    case 'lirik':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
// SCRIPT BY FXSX 
                   case 'randomwaifu':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu`)
                   anu1 = await getBuffer(anu.image)
                   anu2 = `➻ *NAMA* : ${anu.name}\n`
                   anu2 += `➻ *DESC* : ${anu.desc}\n`
                   nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'randomwaifu1':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)  
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
                   anu1 = await getBuffer(anu.img)                    
                   nuy.sendMessage(from, anu1, image, {quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'neko1':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
                   anu1 = await getBuffer(anu.result)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'kusonime':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
                   case 'renungan': 
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
                   case 'samehadaku':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nuy.sendMessage(from, anu2, image, {caption: anu1, quoted: jri })
                   break
                   case 'neon1':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break  
                   case 'text3d':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break                   
                   case 'galaxy':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'gaming':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'colors':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'kling':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               }) 
                   break
                   case 'infonomer':
                   if (isBanned) return reply(mess.only.benned)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
                   case 'jadwaltv':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
                   case 'tvjadwal':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'fml': 
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
                   case 'cinta': 
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
                   case 'twich': 
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'loli':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/randomloli`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'randomhusbu':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
                   anu1 = `➻ *NAMA* : ${anu.waifu}`
                   anu2 = await getBuffer(anu.image)
                   nuy.sendMessage(from, anu2, image, {caption: anu1, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })                   
                   break
                   case 'fake':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
                   case 'pin':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://link*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'qrcode':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'resepmasakan':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'barcode':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} halo sayang*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'cersex':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
                   case 'cerpen':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break
                   case 'anime':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_baguette`)
                   nuy.sendMessage(from, anu, image, {quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'anime1':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_dva`)
                   nuy.sendMessage(from, anu, image, {quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'yuri':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/random_yuri`)
                   nuy.sendMessage(from, anu, image, {quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'tongue':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
                   case 'jadwalsholat':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
                   case 'pantun':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
                   case 'cuaca': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} makassar*`)  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
                   case 'namaninja':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
// SCRIPT BY FXSX                                                                                                                                                                                                                  
                   case 'igstalk':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nuy.sendMessage(from, anu1, image, {caption: anu2, quoted: faa1}).catch(e => {
	               nuyy(nyz.error(prefix, command))
                   console.log(e)
	               })
                   break
                   case 'quran':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
                   case 'estetikpic':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'memeindo':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'darkjokes':
				nuy.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				reply(mess.wait)
				 data = fs.readFileSync('./fajri/dark.js')
                 jsonData = JSON.parse(data)
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 nuy.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				break  
                   case 'nickff':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
                   case 'tahta':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'neon2':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break                    
                   case 'wall':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(6)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break   
                   case 'wolf':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(6)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=rimurubotz&text2=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break 
                   case 'tfire':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break                
                   case 'ytgold':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(8)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'ytsilver':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(10)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 't3d':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(5)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'logoa':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'pornhub':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy&cans*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'marvel':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy&cans*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'leavest':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(9)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break                    
                   case 'phcoment':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy&cans*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'nulis':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'shortener':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
                   case 'urlshort':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
// SCRIPT BY FXSX                    	                                          
                   case 'fox':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'dog':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'cat':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'panda':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'panda1':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'bird':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'koala':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: faa1})
                   break
                   case 'meme':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nuy.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: faa1})
                   break
// SCRIPT BY FXSX                   
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok': case 'bego': case 'pinter': case 'jago': case 'nolep': 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'monyet': case 'haram': 
                   case 'kontol': case 'pakboy': case 'pakgirl':	case 'sadboy': case 'sadgirl': case 'wibu': case 'hebat':
                   if (isBanned) return reply(mess.only.benned)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
				   case 'kapankah':
				   if (isBanned) return reply(mess.only.benned)
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nuy.sendMessage(from, jawab1, text, {quoted: jri})
				   break
		           case 'apakah':
		           if (isBanned) return reply(mess.only.benned)
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nuy.sendMessage(from, jawab, text, {quoted: jri})
				   break
				   case 'slot':    				    				    
				   if (isBanned) return reply(mess.only.benned)
				   slot = `╔════════════════════\n`
				   slot += `║╭───────────[ *SLOT* ]───\n`
				   slot += `║│➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
				   slot += `║│➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
				   slot += `║│➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
				   slot += `║│➻ GAME : SLOT [ *NEW* ] <==>\n`
				   slot += `║╰───────────────────\n`
				   slot += `╚════════════════════\n`
				   nuy.sendMessage(from, slot, text, {quoted: jri})
				   break				  
// SCRIPT BY FXSX                                                                                                                                                                                                                                                                                                                                                           
                   case 'wallteknologi': case 'walteknologi':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/teknologi?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nuy.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'wallpegunungan': case 'walpegunungan':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/pegunungan?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nuy.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'wallmuslim': case 'walmuslim':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/muslim?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nuy.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'wallcyber': case 'walcyber':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/cyberspace?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nuy.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'wallhacker': case 'walhacker':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/wallpaper/programming?apikey=alpin1`)
                   anu1 = JSON.parse(JSON.stringify(anu.result));
                   anu2=  anu1[Math.floor(Math.random() * anu1.length)];
                   anu3 = await getBuffer(anu2)
                   nuy.sendMessage(from, anu3, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'quotes1':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/randomquote/muslim?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'quotes2':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/quotes/kanye?apikey=alpin1`)
                   anu1 = `➻ *QUOTES* : ${anu.result.text_id}`
                   reply(anu1)
                   break
                   case 'wallpaper': case 'walpaper':
                   if (isBanned) return reply(mess.only.benned)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/random/wallpaper?apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'imo': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(5)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/lmo?text=${F}&theme=bintang&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'scary': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=scary-njir&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'metal': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/yamaker?text=${F}&theme=metal-epek&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'metal1': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(8)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=metal-wolf&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'daun': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(6)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/noti?text=${F}&theme=daun-kaki&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case '3dwhite': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(9)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/textmaker/neon9?text=${F}&theme=3dwhite&apikey=alpin1`)
                   anu1 = await getBuffer(anu.result.url)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'robot': 
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   F = body.slice(7)			                  
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/maker/special/transformer?text=${F}&apikey=alpin11`)
                   anu1 = await getBuffer(anu.result.results)
                   nuy.sendMessage(from, anu1, image, {caption: `nihh kack`, quoted: faa1})
                   break
                   case 'caklontong':
                   if (isBanned) return reply(mess.only.benned)
                   anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/kuis/caklontong?apikey=alpin1`)                 
                   anu1 = `➻ *SOAL* : ${anu.result.soal}\nJAWAB CUYY WAKTU 60 DETIK`
                   anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}\n`
                   anu2 += `➻ *DESK* : ${anu.result.deskripsi}`
                   setTimeout( () => {
                   nuy.sendMessage(from, anu1, text,{quoted: faa1})
                   }, 1)
                   setTimeout( () => {
                   costum('50 DETIK LAGI', text, tescuk, cr)
                   }, 10000)                                                                                                                                   
                   setTimeout( () => {
                   costum('40 DETIK LAGI', text, tescuk, cr)
                   }, 20000)    
                   setTimeout( () => {
                   costum('30 DETIK LAGI', text, tescuk, cr)
                   }, 30000)    
                   setTimeout( () => {
                   costum('20 DETIK LAGI', text, tescuk, cr)
                   }, 40000)                                       
                   setTimeout( () => {
                   costum('10 DETIK LAGI', text, tescuk, cr)
                   }, 50000)                                                                                                                                                     
                   setTimeout( () => {
                   nuy.sendMessage(from, anu2, text,{quoted: faa1})                   
                   }, 60000)                                                                          
                   break               
// SCRIPT BY FXSX                    
                   case 'ssweb':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} https://google.com*`)                  
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: faa1})
                   break
                   case 'smoke':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(7)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break 
                   case 'rainbow':
                   if (isBanned) return reply(mess.only.benned)
                   if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuy*`)
                   F = body.slice(9)
                   costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1})
                   break                                      
// SCRIPT BY FXSX                     
                    case 'toimg': 
                    if (isBanned) return reply(mess.only.benned)
					costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
					encmedia = JSON.parse(JSON.stringify(jri).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nuy.sendMessage(from, buffer, image, {quoted: jri, caption: 'nihh kack'})
				    fs.unlinkSync(ran)
					})					
			    	break 
                    case 'readmore':
			    	case 'more':
			    	if (isBanned) return reply(mess.only.benned)
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(ind.wrongf())
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'chatlist':
		         	case 'cekchat':
		         	if (isBanned) return reply(mess.only.benned)
		  	    	nuy.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT MANCA`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nuy.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
                    case 'setprefix':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER MANCA`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
					case 'adds':
				    if (isBanned) return reply(mess.only.benned)
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nuy.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./storage/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./storage/stik.json`, JSON.stringify(setiker))
					nuy.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}slist`, MessageType.text, { quoted: mek })
					break
               case 'slist':
				case 'lists':
				if (isBanned) return reply(mess.only.benned)
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\nKetik : #gs nama stickernya`
					nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
              case 'gs':
				case 'gets':
				if (isBanned) return reply(mess.only.benned)
					namastc = body.slice(12)
					result = fs.readFileSync(`./storage/sticker/${namastc}.webp`)
					nuy.sendMessage(from, result, sticker, {quoted :mek})
					break
              case 'addvn':
				if (isBanned) return reply(mess.only.benned)
					if (!isQuotedAudio) return reply('Reply Audio Nya')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nuy.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./storage/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./storage/audio.json', JSON.stringify(audionye))
					nuy.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}vnlist`, MessageType.text, { quoted: mek })
					break
               case 'vnlist':
				case 'listvn':
				if (isBanned) return reply(mess.only.benned)
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\nKetik : #gvn nama vnnya`
					nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
             case 'gvn':
             if (isBanned) return reply(mess.only.benned)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./storage/audio/${namastc}.mp3`)
					nuy.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
             case 'addimg':
				if (isBanned) return reply(mess.only.benned)
					if (!isQuotedImage) return reply('Reply imagenya!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nuy.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./storage/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./storage/image.json', JSON.stringify(imagenye))
					nuy.sendMessage(from, `Sukses Menambahkan Image\nCek dengan cara ${prefix}imglist`, MessageType.text, { quoted: mek })
					break
            case 'imglist':
				case 'listimg':
				if (isBanned) return reply(mess.only.benned)
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\nKetik : #gimg nama imagenya`
					nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
            case 'gimg':
            if (isBanned) return reply(mess.only.benned)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/image/${namastc}.jpeg`)
					nuy.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
            case 'addvid':
				if (isBanned) return reply(mess.only.benned)
					if (!isQuotedVideo) return reply('Reply videonya!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nuy.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./storage/video/${svst}.mp4`, delb)
					fs.writeFileSync('./storage/video.json', JSON.stringify(videonye))
					nuy.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}vidlist`, MessageType.text, { quoted: mek })
					break
             case 'vidlist':
				case 'listvid':
				if (isBanned) return reply(mess.only.benned)
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*\nKetik : #gvid nama Vidionya`
					nuy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
             case 'gvid':
             if (isBanned) return reply(mess.only.benned)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./storage/video/${namastc}.mp4`)
					nuy.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					case 'settz':
				    if (args.length < 1) return
			        if (!isOwner) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER MANCA`)
                    tz = args[0]
                    reply(`Change tz To ${tz} SUCCESS!`)					 
					break 
                    case 'admin':
         	        case 'owner':
         	        case 'creator':
         	        if (isBanned) return reply(mess.only.benned)
                    nuy.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: faa1})
                    nuy.sendMessage(from, 'TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: jri} )				
					break    
                    case 'sticker':
				    case 'stiker':
				    case 'stickergif':
				    case 'stikergif':
				    case 'sgif':
				    case 's':					 
				    if (isBanned) return reply(mess.only.benned)
					if ((isMedia && !jri.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(jri).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : jri
					const media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
					})
					.on('end', function () {
					console.log('Finish')
					nuy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: faa1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && jri.message.videoMessage.seconds < 11 || isQuotedVideo && jri.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(jri).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : jri
					const media = await nuy.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('Finish')
					nuy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: faa1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
                    case 'bc': 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER MANCA`)
					anu = await nuy.chats.all()
					nuy.setMaxListeners(25)
					for (let _ of anu) {
						nuy.deleteChat(_.jid)
					}
					reply(`sukses`)
					break					 
                    case 'linkgc':
				    if (!isGroup) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`) 
				    if (!isBotGroupAdmins) return reply(`ADMIN KAN MANCA BOT TERLEBIH DAHULU`)
				    linkgc = await nuy.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nuy.sendMessage(from, yeh, text, {quoted: faa1})			       
					break
				    case 'tagall': 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				    case 'delete':
				    case 'del':
				    case 'd':
				    if (!isGroup) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`) 
				    nuy.deleteMessage(from, { id: jri.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
				    case 'kick':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (jri.message.extendedTextMessage === undefined || jri.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = jri.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nuy.groupRemove(from, mentioned)
					} else {
					mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
					nuy.groupRemove(from, mentioned)
					}					
					break 
					case 'hidetag':              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					var value = body.slice(9)
					var group = await nuy.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: jri
					}
					nuy.sendMessage(from, options, text)					 
					break
			    	case 'add':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nuy.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}  
					break 
// SCRIPT BY FXSX 
                    case 'bug':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nuy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = jri.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }
// SCRIPT BY FXSX 
                    nuy.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
// SCRIPT BY FXSX 
                    nuy.sendMessage('6283815956151@s.whatsapp.net', optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })
                    reply('REPORT BUG TELAH TERSAMPAIKAN. TERIMAKASIH TELAH MELAPORKAN FITUR')                     
					break   
					case 'chat':
                    if (args.length < 1) return reply(`contoh ${prefix}chat halo min apa kabar`)
                    const cet1 = body.slice(6)
                    if (cet1.length > 300) return nuy.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = jri.participant
                    const cet2 = `*[ CHAT PENGGUNA ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    //SCRIPT BY FXSX
                    nuy.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*ADA YANG CHAT NIHH*`} } } })                                    
                    reply(`PESAN ANDA SUDAH MASUK`)
                    break
                    case 'asupan':
               nuy.updatePresence(from, Presence.composing)
               if (isBanned) return reply(mess.only.benned)
               reply(mess.wait)
               data = fs.readFileSync('./fajri/asupan.js')
               jsonData = JSON.parse(data)
               randIndex = Math.floor(Math.random() * jsonData.length);
               randKey = jsonData[randIndex];
               asupan = await getBuffer(randKey.result)
               nuy.sendMessage(from, asupan, video, { mimetype: 'video/mp4', quoted: jri, caption: '@thenay_xploit_\nFollow Lah, Tenang Asupan Masih Banyak' })
               break
                    case 'asupan1':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nuy.sendMessage(from, anu2, image, {caption: anu1, quoted: jri})
                    break
                    case 'asupan2':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nuy.sendMessage(from, anu2, image, {caption: anu1, quoted: jri})
                    break
                    case 'ngakak':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {quoted: jri})
                    break
                    case 'nulis1':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nih kak`, quoted: jri})
                    break
                    case 'nulis2':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                    break 
                    case 'nulis3':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                    break 
                    case 'nulis4':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                    break 
                    case 'nulis5':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                    break 
                    case 'nulis6':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `Nihh kack`, quoted: faa1}) 
                    break                     
                    case 'video1':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: faa1}) 
                    break
                    case 'video2':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: faa1}) 
                    break
                    case 'video3':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: faa1}) 
                    break
                    case 'video4':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: faa1}) 
                    break
                    case 'video5':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: faa1}) 
                    break
                    case 'video6':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} bot whatsapp*`)
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, video, {caption: `Nihh kack`, quoted: faa1}) 
                    break
                    case 'orgy':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/orgy?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'nsfwneko':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/nsfwneko?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'mstrb':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/mstrb?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'manga':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/manga?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'jahy':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/jahy?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'hentaigif':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/hentaigif?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'hentai':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/hentai?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'glasses':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/glasses?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'gangbang':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/gangbang?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'ero':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/ero?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'cuckold':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/cuckold?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'blowjob':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/blowjob?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'bdsm':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'ass':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/ass?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'ahegao':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/ahegao?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'zettairyouiki':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'wpnsfwmobile':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/wpnsfwmobile?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'wpmobile':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/wpmobile?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'wallpaper':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/wallpaper?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'thighs':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/thighs?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'uniform':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/uniform?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'tentacles':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/tentacles?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'sfwneko':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/sfwneko?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'pussy':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/pussy?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
                    case 'panties':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    anu = await getBuffer(`https://api.xteam.xyz/randomimage/panties?APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: faa1}) 
                    break
// SCRIPT BY FXSX 	 
                    case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                    case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':
                    case 'gon': case 'killua': case 'sagiri': case 'natsu': case 'genos': case 'saitama': case 'miku':
                    if (isBanned) return reply(mess.only.benned)
                    nuy.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nuy.sendMessage(from, pok, image, { quoted: jri})
				    break
                    case 'foto':
                    case 'pinterest':
                    case 'img':
                    if (isBanned) return reply(mess.only.benned)
				    nuy.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
				    costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nuy.sendMessage(from, pok, image, { quoted: jri})
				    break
                    case 'ramalnomer':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'ramalcinta':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nuy.sendMessage(from, anu2, image, {caption: anu1, quoted: jri})
                    break
                    case 'ramaljodoh':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'jodohbali':
			 	    if (isBanned) return reply(mess.only.benned)
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
			 	    case 'ramalnikah':
			 	    if (isBanned) return reply(mess.only.benned)
			 	    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
                    case 'taksirmimpi':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
                    case 'suit':
                    if (isBanned) return reply(mess.only.benned)
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakangka':
                    if (isBanned) return reply(mess.only.benned)
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
                    case 'tebakbendera':
                    if (isBanned) return reply(mess.only.benned)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nuy.sendMessage(from, anu2, text,{quoted: faa1})                   
                    }, 60000)                                                                          
                    break     
                    case 'kata':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nuy.sendMessage(from, anu, image, {quoted: jri})
                    break
// SCRIPT BY FXSX 
                     case 'maker1':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/neon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker2':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     const Q = args.join(' ')
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/snowtext?text=${Q}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker3':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     const A = args.join(' ')
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cloudtext?text=${A}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker4':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dluxury?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker5':
                     if (isBanned) return reply(mess.only.benned)
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dgradient?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker6':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/blackpink?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker7':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(8)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/realisticvintage?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker8':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/realisticcloud?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker9':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(8)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cloudsky?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker10':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandsummerbeach?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker11':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandwriting?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker12':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/sandengraved?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker13':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/summerysandwriting?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker14':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/balloontext?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker15':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dglue?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker16':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/balloontext?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker17':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgold?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker19':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/1917?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker20':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/minion3d?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker21':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/holographic3d?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker22':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metalpurpledual?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker23':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/deluxesilver?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker24':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/glossybluemetal?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker25':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/deluxegold?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker26':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/glossycarbon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker27':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/fabric?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker28':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/stone?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker29':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3davengers?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker30':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/marvelstudios?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: faa1})
                     break
                     case 'maker31':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/marvel?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker32':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/happnewyearfirework?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker33':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/newyear3d?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker34':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/neontext?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker35':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/metaldarkgoldeffect?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker36':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/helloweenfire?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker37':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/bloodontheroastedglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker38':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/xmas3d?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker39':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalsilver?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker40':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalrosegold?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker41':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgalaxy?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker42':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/3dmetalgold?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker43':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa & bot`)                      
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/lionlogomascot?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker44':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wolflogoblackwhite?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker45':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wolflogogalaxy?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker46':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     var F2 = body.slice(9)
			         var F = F2.split("&")[0];
			 	     var F1 = F2.split("&")[1]; 
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/ninjalogo?text=${F}&text2=${F1}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker47':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/jokerlogo?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker48':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/wicker?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker49':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/naturalleaves?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker50':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/fireworksparkle?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker51':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/skeleton?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker52':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/redfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker53':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/purplefoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker54':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/pinkfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker55':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/greenfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker56':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cyanfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker57':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/bluefoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker58':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/goldfoilballon?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker59':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/steel?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker60':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/ultragloss?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker61':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/denim?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker62':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/decorategreen?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker63':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/decoratepurple?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker64':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/peridotstone?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker65':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/rock?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker66':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/lava?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker67':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/yellowglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker68':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/purpleglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker69':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/orangeglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker70':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/greeglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker71':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/cyanglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
                     case 'maker72':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://api.xteam.xyz/textpro/blueglass?text=${F}&APIKEY=${apixteam}`)
                     nuy.sendMessage(from, anu, image, {caption: `nih kack`, quoted: jri})
                     break
// SCRIPT BY FXSX                      
                     case 'attp':
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nuy.sendMessage(from, atetepe, sticker, {quoted: jri})
                     break                     
                     case 'katailham':
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `➻ *KATA ILHAM* : ${anu.result}`
                     reply(anu1)
                     break
                     case 'citacita':
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     nuy.sendMessage(from, anu, MessageType.audio, {quoted: jri, mimetype: 'audio/mp4', ptt:true})
                     break
                     case 'blackpink':
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: jri})
                     break
                     case 'exo':
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: jri})
                     break
                     case 'bts':
                     costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     nuy.sendMessage(from, anu, image, {caption: `nihh kack`, quoted: jri})
                     break
                     case 'simi':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} hai sayang`)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
                     break
                     case 'textfont':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'kapital':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
                     case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     case 'boomtext':  
                     if (args.length < 1) return reply(`[❗] CONTOH??\n*${prefix}${command} nuyfaa&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://api-self.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
// SCRIPT BY FXSX 
                   	case 'welcome':
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
					if (args[0] === 'on') {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./nuyfaa/welkom.json', JSON.stringify(welkom))
					reply('[❗] SUKSES AKTIF WELCOME')
					} else if (args[0] === 'off') {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nuyfaa/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`on untuk mengaktifkan, off untuk menonaktifkan`)
					}
					break  
                    case 'antilink': 
                    if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
					if (args[0] === 'on') {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nuyfaa/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (args[0] === 'off') {
					antilink.splice(from, 1)
					fs.writeFileSync('./nuyfaa/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
                    case 'antibadword':
                    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`KHUSUS OWNER GRUP`)
                    if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
                    if (args[0] === 'on') {
                    if (isBadWord) return reply('anti badword sudah on')
                 	badword.push(from)
                 	fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	reply('Sukses Mengaktifkan Anti Badword')
              	    } else if (args[0] === 'off') {
                    if (!isBadWord) return reply('anti badword sudah off')
                  	badword.splice(from, 1)
                 	fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	reply('Sukses Menonaktifkan Anti Badword Di Grup')
             	    } else {
                 	reply(`on untuk mengaktifkan, off untuk menonaktifkan`)
                	}
                    break
                case 'addbadword':
                    if (!isOwner) return
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
					case 'neraka': 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
					if (args[0] === 'on') {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					neraka.push(from)
					fs.writeFileSync('./nuyfaa/neraka.json', JSON.stringify(neraka))
					reply('*[❗] ACTIVATED NERAKA*')
					} else if (args[0] === 'off') {
					neraka.splice(from, 1)
					fs.writeFileSync('./nuyfaa/neraka.json', JSON.stringify(neraka))
					reply('*[❗] DEACTIVATED NERAKA*')
					} else {
					reply(`on untuk mengaktifkan, off untuk menonaktifkan`)
					}
					break
					case 'antigay':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nuyfaa/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nuyfaa/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antibocil':
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nuyfaa/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nuyfaa/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					case 'antiwibu': 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`MAAP MAAP AJA NIH!\nINI KHUSUS OWNER GRUP`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nuyfaa/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nuyfaa/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
// SCRIPT BY FXSX         					
					case 'tebak':
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nuy.sendMessage(from, anu1, text, {quoted: faa1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nuy.sendMessage(from, anu2, text,{quoted: faa1})                   
                    }, 60000)                                                                          
                    break 
                    case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
                    case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
                    case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
                    case 'ttp1':
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${l0lhuman}&text=${F}`)
                    nuy.sendMessage(from, anu1, sticker, {quoted: faa1})
                    break
                    case 'ttp2':
                    case 'ttp3':
                    case 'ttp4':                     
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${l0lhuman}&text=${F}`)
                    nuy.sendMessage(from, anu1, sticker, {quoted: faa1})
                    break
                    case 'info1':
                    reply(nyz.info1())
                    break
                    case 'info2':
                    reply(nyz.info2())
                    break
                    case 'info3':
                    reply(nyz.info3())
                    break
                    case 'character': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nuy.sendMessage(from, thumbnail, image, { quoted: jri, caption: anu2 })
                    break
                    case 'manga1': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `➻ Id : ${anu.id}\n`
                    anu2 += `➻ Id MAL : ${anu.idMal}\n`
                    anu2 += `➻ Title : ${anu.title.romaji}\n`
                    anu2 += `➻ English : ${anu.title.english}\n`
                    anu2 += `➻ Native : ${anu.title.native}\n`
                    anu2 += `➻ Format : ${anu.format}\n`
                    anu2 += `➻ Chapters : ${anu.chapters}\n`
                    anu2 += `➻ Volume : ${anu.volumes}\n`
                    anu2 += `➻ Status : ${anu.status}\n`
                    anu2 += `➻ Source : ${anu.source}\n`
                    anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `➻ Score : ${anu.averageScore}%\n`
                    anu2 += `➻ Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nuy.sendMessage(from, thumbnail, image, { quoted: jri, caption: anu2 })
                    break                     
                    case 'tiktoknowm': 
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    nuy.sendMessage(from, ini_buffer, video, { quoted: faa1})
                    break
                    case 'tiktokmusic': 
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    nuy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: faa1})
                    break
                    case 'telesticker': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nuy.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    case 'nhentai': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nuy.sendMessage(from, ini_buffer, document, { quoted: jri, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                    case 'semoji': 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    nuy.sendMessage(from, ini_buffer, sticker, { quoted: faa1})
                    break                    
                    case 'phkomen': 
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nuy.sendMessage(from, buffer, image, { quoted: faa1})
                    break
                    case 'art':
                    case 'bts':
                    case 'exo':
                    case 'elf':
                    case 'loli':
                    case 'neko':
                    case 'waifu':
                    case 'shota':
                    case 'husbu':
                    case 'sagiri':
                    case 'shinobu':
                    case 'megumin':
                    case 'wallnime':
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${l0lhuman}`)
                    nuy.sendMessage(from, buffer, image, { quoted: faa1})
                    break                     
                    case 'bj':
                    case 'ero':
                    case 'cum':
                    case 'feet':
                    case 'yuri':
                    case 'trap':
                    case 'lewd':
                    case 'feed':
                    case 'eron':
                    case 'solo':
                    case 'gasm':
                    case 'poke':
                    case 'anal':
                    case 'holo':
                    case 'tits':
                    case 'kuni':
                    case 'kiss':
                    case 'erok':
                    case 'smug':
                    case 'baka':
                    case 'solog':
                    case 'feetg':
                    case 'lewdk':
                    case 'waifu':
                    case 'pussy':
                    case 'femdom':
                    case 'cuddle':
                    case 'hentai':
                    case 'eroyuri':
                    case 'cum_jpg':
                    case 'blowjob':
                    case 'erofeet':
                    case 'holoero':
                    case 'classic':
                    case 'erokemo':
                    case 'fox_girl':
                    case 'futanari':
                    case 'lewdkemo':
                    case 'wallpaper':
                    case 'pussy_jpg':
                    case 'kemonomimi':
                    case 'nsfw_avatar': 
                    if (!isNeraka) return reply(nyz.neraka(prefix))
                    costum('[❗] SEDANG DIPROSES', text, tescuk, cr2) 
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${l0lhuman}`)
                    nuy.sendMessage(from, ini_buffer, image, { quoted: faa1})
                    break
                    default:          
                    if (body.startsWith(`${prefix}${command}`)) {
                    const SS1 = fs.readFileSync('./sound/tidakada.mp3')
                    nuy.sendMessage(from, SS1, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: uyuy})
                    }
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts() 