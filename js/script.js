document.addEventListener("DOMContentLoaded", () => {
    const textArray = ["Machine Learning Engineer", "Data Scientist"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const delay = 1500; // Delay before switching words

    function typeEffect() {
        const textElement = document.getElementById("animated-text");
        const currentText = textArray[textIndex];

        if (!isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, delay); // Wait before deleting
                return;
            }
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length; // Move to next word
            }
        }

        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    setTimeout(typeEffect, 500); // Start typing effect
});
