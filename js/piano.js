const WHITE_KEYS = ['z','x','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];

const keys = document.querySelectorAll('.key');
const whitekeys=document.querySelectorAll('.key.white');
const blackkeys=document.querySelectorAll('.key.black');
 //console.log(blackkeys);

keys.forEach(key =>{
    key.addEventListener('click', ()=> onPlaySound(key));
 });

 document.addEventListener('keydown', event => {
    const keyboard = event.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(keyboard);
    const blackKeyIndex = BLACK_KEYS.indexOf(keyboard);
    //console.log(whiteKeyIndex);
    if(!event.repeat){
      if(whiteKeyIndex  > -1){
         onPlaySound(whitekeys[whiteKeyIndex]);
      }
      if(blackKeyIndex > -1){
         onPlaySound(blackkeys[blackKeyIndex]);
      }
    }
 });

 function onPlaySound(key){
    const audiokey = document.getElementById(key.dataset.note);
    audiokey.currentTime = 0;
    audiokey.play();
    key.classList.add('active')
    audiokey.addEventListener('ended', () => {
      key.classList.remove('active')
    })
 }


