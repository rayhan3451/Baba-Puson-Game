const typingDiv = document.querySelector('.typing');
const statsDiv = document.querySelector('.stats');
const startGameBtn = document.querySelector('#start-game');

const paragraphs = [
 `Akhon choto gorukinar theke boro goru kina better.`,
 `Go-to 2 year dhore farmer ra sell Korte partase na thik moto tai goru gula boro hoiya gese.`,
 `Akhon ai goru gula palle farmer der loss Hobe cz aigula r barbo na.`,
 `So boro goru kina r farmerder help kora same e.`,
 `Beshi mangsho mane beshi gorib manusher Pete beshi protine jabe.`,
 `Akhon kisu oshadu bebshahi 70k er choto gorure 80-90-1lakh e sell kortase ja nejjo muler theke onk beshi.`,
 `Nejomulle jinish kinar odhikar kretar ase but dekhte Hobe bicrata Jani khoti grostho na hoi.`,
 ` E khetrre apni Jodi maippaw goru kinan Kono prob nai.`,
 `But apni apnar koster taka dia Valo shundor boro goru korbani diben / choto / chagol.`,
 `To aigula kinar time e apni uttom jinish ta kinben Allah re khushi korar jonne.`,
 `Jodi bikcreta na thoke taile to r problem nai.`,
 `Onake vhabe ojon koira goru kina jaibo na.`,
 `Beshi boro goru kina jaibo na.`,
 `Cz manush Jon vhabbo show off kortase.`,
 `are Vai allahr rastay Dewar shomoy choto khujen r nijer bari garir shomoy boro boro khujen kn?`,
 `Jar ja shamortho ase Shai level er best ta Dewar try korbo.`,
 `Aitai holo genuine korbani.`,
]

const startGame = () => {
 startGameBtn.classList.add('hidden');
 typingDiv.innerHTML = "";
 statsDiv.innerHTML = "";

 const text = paragraphs[parseInt(Math.random()*paragraphs.length)];

const characters = text.split('').map((char)=>{
 const span = document.createElement("span");
 span.innerText = char;
 typingDiv.appendChild(span);
 return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add('cursor');

let startTime = null;

const keydown = ({key})=>{
 if(!startTime){
  startTime = new Date();
 }
 if(key === cursorCharacter.innerText) {
  cursorCharacter.classList.remove("cursor");
  cursorCharacter.classList.add("done");
  cursorCharacter = characters[++cursorIndex];
 }
 if(cursorIndex >= characters.length) {
  // game ended
  const endTime = new Date();
  const delta = endTime - startTime;
  const seconds = delta / 1000;
  const numberOfWords = text.split(" ").length;
  const wps = numberOfWords / seconds;
  const wpm = Math.floor(wps * 60.0);
  document.querySelector(".stats").innerText = `আপনি ১ মিনিটে ${wpm} টি বাবার বাণী টাইপ করেছেন`;
  // display wpm
  document.removeEventListener("keydown",keydown);
  startGameBtn.classList.remove('hidden');
  return;
 }
 cursorCharacter.classList.add("cursor");
};

document.addEventListener("keydown",keydown);
};