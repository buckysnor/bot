
let pega = document.querySelector('a.-nal3');
if(pega){
    pega.click();

}

setTimeout(() =>  { 

let seguir = document.querySelector('.y3zKF');
if(seguir){
    seguir.click();

}   }, 2000)


setTimeout(() => {   
let perfil = document.querySelector('a.FPmhX');

if(perfil){

    perfil.click();
}  },5000)


setTimeout(() => {
let foto = document.querySelector('div._9AhH0');
if(foto){

    foto.click();
} else {
    window.history.back();
}  },10000)


setTimeout(() => { 
const next = document.querySelector("a._65Bje");
counter = 0;
function doLike() {
  const like_btn = document.querySelector(' span.fr66n > button');
  if(like_btn){
      console.log('click\n');
      like_btn.click();
      counter++;
  }
  next.click();
  console.log(`Você já curtiu ${counter} post(s)!`);
}


(function loop(){
    seguidor = setTimeout(() => {

    if( counter > 3){
        parar_seguidor() 
    }else{
        doLike();
        loop()

    }
    }, 3000)
    
}());

   

function parar_seguidor() {
	clearTimeout(seguidor);
	
}