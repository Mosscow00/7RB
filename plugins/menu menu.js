//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029VaoOUTCA89MgywLh6s19

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/efb1c82a1c11caa338b8e.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: `test`.trim() },
            footer: { text: `*
            7rB 2leX*`.trim() },  
            header: {
                title: `*┃━━━━━⬣7rB 2leX⬣━━━━━┃*\n\n*◞❐بوت حرب اليكس*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت استرو*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص والجروبات*\n\n*◞❐يمنع شتم البوت*\n\n*┃━━━━━⬣7rB 2leX⬣━━━━━┃*`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '⌝قـائـمـه الاوامـر⌞',
  						  		sections: [
  						  			{
  						  				title: 'List',
  							  	    highlight_label: 'ON',
  						  		    rows: [
  						  		    	{
  						  		    		header: '【..≼قــســم الجروبات≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الجروبات≽..】',
  								    		  id: '.الجروب'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الاعضاء≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الاعضاء≽..】',
  								    		  id: '.الاعضاء'
  						  		    	}
  						  				]
  						        	},
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الانــمـــي≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الانــمـــي≽..】',
  								    		  id: '.انيمي'
  						  		    	}
  						  				]
                                    },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الترفيه≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الترفيه≽..】',
  								    		  id: '.الترفيه'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الايديت والصور≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الايديت والصور≽..】',
  								    		  id: '.الايديت'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم التحويلات≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم التحويلات≽..】',
  								    		  id: '.التحويلات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الادوات≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الادوات≽..】',
  								    		  id: '.الاداوات'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الدين≽..】',
  										      title: '7rB 2leX',
  									    	  description: '【..≼قــســم الدين≽..】',
  								    		  id: '.الدين'
  						  		    	}
  						  				]
                                        },
  						  			{
  						  				highlight_label: 'ON',
  						  				rows: [
  						  					{
  						  		    		header: '【..≼قــســم الذكاء الاصطناعي≽..】',
  										      title: '7rB 2leX',		 
                                           	  description: '【..≼قــســم الذكاء الاصطناعي≽..】',
  								    		  id: '.ذكاءاصطناعي'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'quick_reply',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'quick_reply',
                                      id: `message`
                                  })
                              },
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'قناة البوت',
                                      url: '',
                                      merchant_url: 'https://whatsapp.com/channel/0029VaoOUTCA89MgywLh6s19'
                                  })
                              },
                              {
                                  name: 'cta_call',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: 'call',
                                      id: 'message'
                                  })
                              },
                              
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu)$/i;
export default handler;
