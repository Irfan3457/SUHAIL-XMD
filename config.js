const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_02_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU0syVlBZNGQvUHdWOW1uMzUwcGhyNXFWajNGdkpPYXdLaTNpb05qMTVGWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRGREbXdCaXdSTFctT3RxMV9Dek5jd1wiLFxuICBcInBob25lSWRcIjogXCJiMjA3NWZiYS0wYTMwLTRlN2EtOGYwNS00NGNmNzhmNjk5M2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk2LFxuICAgICAgOSxcbiAgICAgIDE1NSxcbiAgICAgIDgzLFxuICAgICAgMTg3LFxuICAgICAgMTgsXG4gICAgICA1MSxcbiAgICAgIDYwLFxuICAgICAgOSxcbiAgICAgIDEyNixcbiAgICAgIDExNyxcbiAgICAgIDEsXG4gICAgICAyNTQsXG4gICAgICAxMzcsXG4gICAgICAxMzMsXG4gICAgICAxNzEsXG4gICAgICAxMjAsXG4gICAgICA3OCxcbiAgICAgIDUzLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE1MyxcbiAgICAgIDE1OSxcbiAgICAgIDYyLFxuICAgICAgNjksXG4gICAgICAyMzQsXG4gICAgICAwLFxuICAgICAgMjExLFxuICAgICAgODUsXG4gICAgICAyMzQsXG4gICAgICAxNzYsXG4gICAgICAyMjIsXG4gICAgICA0OCxcbiAgICAgIDEzMyxcbiAgICAgIDMzLFxuICAgICAgMjAzLFxuICAgICAgNTcsXG4gICAgICA3OSxcbiAgICAgIDIyNCxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKMUc0MVpCRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDAzMjg1OTEzOjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSXJmYW4gQmhhaVwiLFxuICAgIFwibGlkXCI6IFwiMjY0OTYxMjYzNzE0NDg0OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rYnc0Y0NFSm5aN2JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT0IxT2U2eUFndFRjcWtvNWlLUEYxb0p0S0lpSFIvUzMxWGltZFN6K2duVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtNS83SVptOWJER0JNM0swNldVZzhiajdoKy9nOXp4UTF5L1Z0eEVtZ1lib2ttNCs5Z3BBVkpraFRQb3J3cVB0c0ZiSHdOSnVwVWZMR2NiYVdJRzFDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2V1J1OEJud0FGVFNaTUFZM1g0YWE5NHZtaWRzQ2pzM0lVOVRsdTBKZjJiSjVvZTkwbnJEN1VzczB1L3pva2hXbDZyaDVRVFpteHRGYnZrS1dtYUdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDMyODU5MTM6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5ODUwNTI2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
