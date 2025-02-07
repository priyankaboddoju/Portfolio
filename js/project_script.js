document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        {
            "title": "Object Detection System",
            "description": "Developed an object detection model using SSD with a VGG-16 backbone to detect cars, chairs, and lampposts.",
            "image": "assets/Object-detection-Real-world-applications-and-benefits.png" // Add image path here
        },
        {
            "title": "Efficient Text Summarization",
            "description": "Designed and fine-tuned a summarization model for long documents, improving readability and compression ratio.",
            "image": "assets/text_summarization.jpg" // Add image path here
        },
        {
            "title": "Medical QA System",
            "description": "Built a reading comprehension QA system to extract key medical insights from patient transcripts.",
            "image": "assets/medical.jpg" // Add image path here
        },
        {
            "title": "COVID-19 Data Analysis Pipeline",
            "description": "Developed a scalable data pipeline using AWS services to analyze COVID-19 trends and visualize key insights.",
            "image": "assets/covid.jpg" // Add image path here
        },
        {
            "title": "Email Spam Detection using Logistic Regression",
            "description": "Implemented a spam classification model from scratch using logistic regression, feature engineering, and text preprocessing.",
            "image": "assets/email.webp" // Add image path here
        },
        {
            "title": "Image Classification & OCR",
            "description": "Designed an image classification model with deep learning and integrated OCR to extract text from images for document processing.",
            "image": "assets/image.png" // Add image path here
        }
    ];
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        // Project content container
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Image section (30% width)
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("project-image-container");
        imageDiv.innerHTML = `<img src="${project.image || ''}" class="project-image" alt="${project.title}" />`;

        // Title and description section (70% width)
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("project-title-container");
        titleDiv.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        `;

        // Append both parts to the project card
        projectCard.appendChild(imageDiv);
        projectCard.appendChild(titleDiv);

        // Append project card to the container
        projectDiv.appendChild(projectCard);
        projectsContainer.appendChild(projectDiv);
    });
});
