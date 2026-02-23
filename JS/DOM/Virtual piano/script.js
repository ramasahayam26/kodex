// My code

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






// Code with AI Help for better UI


document.addEventListener("keydown", function(event) {
  
  // Get the pressed key (convert to lowercase)
  const pressedKey = event.key.toLowerCase();

  // Find matching piano key using data-key
  const keyElement = document.querySelector(
    `.key[data-key="${pressedKey}"]`
  );

  // If no matching key, stop
  if (!keyElement) return;

  // Add active class (changes color)
  keyElement.classList.add("active");

  // Remove active class after 150ms
  setTimeout(function() {
    keyElement.classList.remove("active");
  }, 150);

});

