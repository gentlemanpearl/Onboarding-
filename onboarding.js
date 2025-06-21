const slides = [
    {
        title: "Unlock the Era of Stock",
        description: "Welcome to a community driven by learning and analytics. Join us to uncover the secrets of the stock market.",
        image: "./onboarding -images/1.png",
        buttonText: "Next"
    },
    {
        title: "Powerful Analytics at your Fingertips",
        description: "Gain a competitive edge with our advanced analytics tools. Make informed decisions and take control of your financial future.",
        image: "./onboarding -images/2.png",
        buttonText: "Next"
    },
    {
        title: "Your Path to Financial Success",
        description: "Where community, learning and analytics coverage. Start your journey towards financial success with us.",
        image: "./onboarding -images/3.png",
        buttonText: "Get Started"
    }
];

let current = 0;

function renderSlide(index) {
    // Fade out content for a smooth transition
    fadeOut();

    setTimeout(() => {
        // Update slide content
        document.getElementById("slide-image").src = slides[index].image;
        document.getElementById("slide-title").textContent = slides[index].title;
        document.getElementById("slide-description").textContent = slides[index].description;
        document.getElementById("next-btn").textContent = slides[index].buttonText;

        // Update the active dot
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        // Fade in new content
        fadeIn();
    }, 300); // Match this delay with the fade transition time
}

function fadeOut() {
    const elements = [
        document.getElementById("slide-image"),
        document.getElementById("slide-title"),
        document.getElementById("slide-description")
    ];
    elements.forEach(el => el.classList.add('fade'));
}

function fadeIn() {
    const elements = [
        document.getElementById("slide-image"),
        document.getElementById("slide-title"),
        document.getElementById("slide-description")
    ];
    elements.forEach(el => el.classList.remove('fade'));
}

function nextSlide() {
    if (current < slides.length - 1) {
        current++;
        renderSlide(current);
    } else {
        // Optionally, redirect or perform an action on the last slide
        alert("Onboarding complete!");
    }
}

function goToLast() {
    current = slides.length - 1;
    renderSlide(current);
}

document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            current = index;
            renderSlide(current);
        });
    });

    // Initialize the first slide
    renderSlide(0);
});