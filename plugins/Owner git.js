const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/PjFla4v.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Creater JiHaD*
*Best Bgm Bot💘*

*Owner number wa.me/917736936605*

*githublink       https://github.com/Ajnasajnas/ElsaMwol*

*audio commads    https://github.com/Ajnasajnas/ElsaMwol/tree/master/uploads*

*sticker commads  https://github.com/Ajnasajnas/ElsaMwol/tree/master/stickers*
`}) 

}));
