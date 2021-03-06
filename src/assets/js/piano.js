 import {
   GiphyFetch
 } from '@giphy/js-fetch-api'

 console.log("Test Debut - je suis un piano")
 /*Table de Correspondance note FR-ANg
 Do -> C : /assets/sounds/C.mp3
 Do# -> C# : /assets/sounds/C#.mp3  
 Ré -> D : /assets/sounds/D.mp3  
 Ré# -> D#: /assets/sounds/D#.mp3  
 Mi -> E : /assets/sounds/E.mp3  
 Fa -> F: /assets/sounds/F.mp3  
 Fa# -> F#: /assets/sounds/F#.mp3 
 Sol -> G  : /assets/sounds/G.mp3 
 Sol# -> G#  : /assets/sounds/G#.mp3 
 La -> A  : /assets/sounds/A.mp3 
 La# -> A#   : /assets/sounds/A#.mp3 
 Si -> B    : /assets/sounds/B.mp3 
 */


 /**changerEmoticon
  * * Test pour changer juste l'image la premiere fois qu'on touche le clavier

 function changerEmoticon() {
   console.log('Changement Emoticon');
  let srcimg ; 
  let x = document.getElementById("image-emoji");  
    Avec juste les images acutelle  
   srcimg = "./images/emoji-img3.jpg";
   //srcimg=*mettre le retour de l'api*
   x.setAttribute("src", srcimg);
 }
 */
 /**changerEmoticonApi 
  * Permet de changer d'emoji aleatoirement
  * rappel clé API GIHPY: la clé d'API de giphy hoc7Xw81iwUP2iewXhekupQznVmYDlHK
  */

 async  function changerEmoticonApi(){
 //import { GiphyFetch } from "@giphy/js-fetch-api"; 
  const gf = new GiphyFetch('hoc7Xw81iwUP2iewXhekupQznVmYDlHK'); 
  const { data: gifs } = await gf.emoji();
  console.log(gifs)
  let x = document.getElementById("image-emoji");
  let srcimg ; // pour la source image

    //preparation random
   let random = async () => {
      try {
        const result = await gf.random();
        console.log(`random`, result);
      } catch (error) {
        console.error(`random`, error);
      }
    };
    // const { data: gif } = await gf.random({ tag: 'beer', type: 'stickers' })
   let random1= random();
   console.log(random1);

   //test radom 2
   const nbRandom = Math.floor(Math.random() * Math.floor(26)) ;
   //console.log(gifs[nbRandom].images['fixed_width'].webp) ;
   const urlRandom = gifs[nbRandom].images['fixed_width'].webp ;
   //on veut recuperer image_original_url 
  console.log(urlRandom );  
  srcimg= urlRandom ;
    //il faut recuper la source de l'image
    x.setAttribute("src", srcimg);
  }
  //test
  changerEmoticonApi()
 
 /**MiseYellow(val)
  * Permet de mettre en fond jaune l'element (touche-blanche>touche jaune)
  * @param {*} val  : l'objet qu'on veut mettre en jaune
  */
 function MiseYellow(val) {
   val.style.backgroundColor = 'yellow';
 }
 /**MiseRed(val)
  * Permet de mettre en fond rouge l'element (touche-noir=>touche rouge)
  * @param {*} val  : l'objet qu'on veut mettre en red
  */
 function MiseRed(val) {
   val.style.backgroundColor = 'red';
 }
 /** MiseWhite(val)
  * Permet de mettre en fond blanche l'element (touche jaune  =>touche-blanche)
  * @param {*} val  : l'objet qu'on veut mettre en blanc
  */
 function MiseWhite(val) {
   val.style.backgroundColor = 'white';
 }
 /** MiseBlack(val)
  * Permet de mettre en fond noir l'element ( touche rouge=>touche-noir)
  * @param {*} val  : l'objet qu'on veut mettre en  noir
  */
 function MiseBlack(val) {
   val.style.backgroundColor = 'black';
 }

 //Quand appuis sur souris lever - changement coleur + Son
 function toucherToucheClavierU( id,  val) {
   val.addEventListener("mouseup", function (event) {
    if(event)
     switch (id) {
       case 'Do':
         MiseWhite(val)
         break;
       case 'DoDiese':
         MiseBlack(val)
         break;

       case 'Re':
         MiseWhite(val)
         break;

       case 'ReDiese':
         MiseBlack(val)
         break;

       case 'Mi':
         MiseWhite(val)
         break;

       case 'Fa':
         MiseWhite(val)
         break;

       case 'FaDiese':
         MiseBlack(val)
         break;

       case 'Sol':
         MiseWhite(val)
         break;

       case 'SolDiese':
         MiseBlack(val)
         break;

       case 'La':
         MiseWhite(val)
         break;
       case 'LaDiese':
         MiseBlack(val)
         break;

       case 'Si':
         MiseWhite(val)
         break;

       default:
         console.log("desolé je trouve pas le son")
     }
   });
 }

 function toucherToucheClavierD(id, val) {
   val.addEventListener("mousedown", function (event) {
     if(event==val){
      console.log(event); 
     }
     const audio = document.createElement('audio')
    // changerEmoticon();
     changerEmoticonApi()
     switch (id) {
       case 'Do':
         MiseYellow(val)
         audio.src = "./assets/sounds/C.mp3";
         break;
       case 'DoDiese':
         MiseRed(val);
         audio.src = "./assets/sounds/C%23.mp3"
         break;

       case 'Re':
         MiseYellow(val)
         audio.src = "./assets/sounds/D.mp3"
         break;

       case 'ReDiese':
         MiseRed(val);
         audio.src = "./assets/sounds/D%23.mp3"
         break;

       case 'Mi':
         MiseYellow(val)
         audio.src = "./assets/sounds/E.mp3"
         break;

       case 'Fa':
         MiseYellow(val)
         audio.src = "./assets/sounds/F.mp3"
         break;

       case 'FaDiese':
         MiseRed(val);
         audio.src = "./assets/sounds/F%23.mp3"
         break;

       case 'Sol':
         MiseYellow(val)
         audio.src = "./assets/sounds/G.mp3"
         break;

       case 'SolDiese':
         MiseRed(val);
         audio.src = "./assets/sounds/G%23.mp3"
         break;

       case 'La':
         MiseYellow(val)
         audio.src = "./assets/sounds/A.mp3"
         break;
       case 'LaDiese':
         MiseRed(val);
         audio.src = "./assets/sounds/A%23.mp3"
         break;

       case 'Si':
         MiseYellow(val)
         audio.src = "./assets/sounds/B.mp3"
         break;

       default:
         console.log("desolé je trouve pas le son")
     }
     audio.play();
   });
 }

 //Blanc
 const Do = document.getElementById('Do');
 const Doid = Do.id;
 toucherToucheClavierD(Doid, Do);
 setTimeout(MiseWhite(Do), 1000); //-Pour resoudre bug si on touche premier fois do -> Yellow rester - se declence aprés une seconde
 toucherToucheClavierU(Doid, Do);

 const Re = document.getElementById('Re');
 const Reid = Re.id;
 toucherToucheClavierD(Reid, Re);
 toucherToucheClavierU(Reid, Re);

 const Mi = document.getElementById('Mi');
 const Mid = Mi.id;
 toucherToucheClavierD(Mid, Mi);
 toucherToucheClavierU(Mid, Mi);

 const Fa = document.getElementById('Fa');
 const Faid = Fa.id;
 toucherToucheClavierD(Faid, Fa);
 toucherToucheClavierU(Faid, Fa)

 const Sol = document.getElementById('Sol');
 const Solid = Sol.id;
 toucherToucheClavierD(Solid, Sol);
 toucherToucheClavierU(Solid, Sol);

 const La = document.getElementById('La');
 const Laid = La.id;
 toucherToucheClavierD(Laid, La);
 toucherToucheClavierU(Laid, La);

 const Si = document.getElementById('Si');
 const Sid = Si.id;
 toucherToucheClavierD(Sid, Si);
 toucherToucheClavierU(Sid, Si);

 //Noir
 const DoDiese = document.getElementById('DoDiese');
 const Dodid = DoDiese.id;
 toucherToucheClavierD(Dodid, DoDiese);
 toucherToucheClavierU(Dodid, DoDiese);

 const ReDiese = document.getElementById('ReDiese');
 const Redid = ReDiese.id;
 toucherToucheClavierD(Redid, ReDiese);
 toucherToucheClavierU(Redid, ReDiese);

 const FaDiese = document.getElementById('FaDiese');
 const Fadid = FaDiese.id;
 toucherToucheClavierD(Fadid, FaDiese);
 toucherToucheClavierU(Fadid, FaDiese);

 const SolDiese = document.getElementById('SolDiese');
 const Soldid = SolDiese.id;
 toucherToucheClavierD(Soldid, SolDiese);
 toucherToucheClavierU(Soldid, SolDiese);

 const LaDiese = document.getElementById('LaDiese');
 const Ladid = LaDiese.id;
 toucherToucheClavierD(Ladid, LaDiese);
 toucherToucheClavierU(Ladid, LaDiese);

 console.log("Test Fin - je suis un piano");