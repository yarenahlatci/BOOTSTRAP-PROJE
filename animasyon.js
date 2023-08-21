const animatedText = document.getElementById('animated-text');
const textContent = animatedText.textContent;
animatedText.textContent = '';

for (const char of textContent) {
    const charElement = document.createElement('span');
    charElement.textContent = char;
    animatedText.appendChild(charElement);
}

let delay = 0;
animatedText.querySelectorAll('span').forEach((charElement, index) => {
    charElement.style.animation = `slide-from-right 0.5s ease ${delay}s forwards`;
    delay += 0.1; // Harf başına eklenen gecikme süresi
});