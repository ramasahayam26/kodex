var keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => {
        playSound(key.dataset.key);
    });
});

document.addEventListener("keydown", (dets) => {
    playSound(dets.key);
});

function playSound(key){
    var audio = new Audio(`audio/${key}.mp3`);
    audio.play();
}


document.addEventListener("keydown", function(event) {
  
  const pressedKey = event.key.toLowerCase();

  const keyElement = document.querySelector(
    `.key[data-key="${pressedKey}"]`
  );

  if (!keyElement) return;

  keyElement.classList.add("active");

  setTimeout(function() {
    keyElement.classList.remove("active");
  }, 150);

});

