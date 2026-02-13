const yes=document.getElementById("yesBtn");
const no=document.getElementById("noBtn");
const first=document.getElementById("firstPage");
const envelopePage=document.getElementById("envelopePage");
const env=document.getElementById("env");
const finalPage=document.getElementById("finalPage");

/* NO button move */
no.addEventListener("mouseover",()=>{
  no.style.position="absolute";
  no.style.left=Math.random()*150+"px";
  no.style.top=Math.random()*60+"px";
});

/* YES click */
yes.addEventListener("click",()=>{
  first.style.display="none";
  envelopePage.style.display="block";
});

/* Envelope open */
env.addEventListener("click",()=>{
  env.classList.add("open");

  const music=new Audio("song.mp3");
  music.loop=true;
  music.play();

  setTimeout(()=>{
    envelopePage.style.display="none";
    finalPage.style.display="block";
    startHearts();
    startPetals();
  },1000);
});

/* Floating hearts */
function startHearts(){
  setInterval(()=>{
    let h=document.createElement("div");
    h.className="heart";
    h.innerText=["💜","💖","🩵"][Math.floor(Math.random()*3)];
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(Math.random()*3+4)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),7000);
  },600);
}

/* Petals */
function startPetals(){
  setInterval(()=>{
    let p=document.createElement("div");
    p.className="petal";
    p.innerText=["🪻","🌸","💙"][Math.floor(Math.random()*3)];
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(Math.random()*3+5)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),8000);
  },700);
}

/* Kiss Burst */
document.addEventListener("click",(e)=>{
  if(finalPage.style.display==="block"){
    for(let i=0;i<6;i++){
      let k=document.createElement("div");
      k.className="kiss";
      k.innerText="💋";
      k.style.left=(e.clientX+Math.random()*40-20)+"px";
      k.style.top=(e.clientY+Math.random()*40-20)+"px";
      document.body.appendChild(k);
      setTimeout(()=>k.remove(),1000);
    }
  }
});