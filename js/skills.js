document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill-progress");

    skills.forEach(skill => {
        const progress = skill.getAttribute("data-progress");
        skill.style.setProperty('--progress', progress);  // Set the dynamic width
    });
});
