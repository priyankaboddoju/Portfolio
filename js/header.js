window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    const heroSection = document.querySelector(".hero-section"); // Ensure this matches your actual class or ID
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight; // Get the bottom position of the hero section

    if (window.scrollY >= heroBottom) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
