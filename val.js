function openPopup(){
  document.getElementById("popup").classList.add("show");
}

function closePopup(){
  document.getElementById("popup").classList.remove("show");
}

/* Floating hearts generator */
function createHeart(){
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML="❤️";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(6+Math.random()*5)+"s";
  document.body.appendChild(heart);

  setTimeout(()=>heart.remove(),9000);
}

setInterval(createHeart,500);