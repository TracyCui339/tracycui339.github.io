document.addEventListener("DOMContentLoaded", () => {
    const headingText = "Leading the Way in Maritime Energy Efficiency";
    const headingElement = document.getElementById("dynamic-heading");
    const paragraphElement = document.getElementById("dynamic-paragraph");

    let index = 0;

    function typeHeading() {
        if (index < headingText.length) {
            headingElement.innerHTML += headingText.charAt(index);
            index++;
            setTimeout(typeHeading, 20); // Decreased delay for faster typing
        } else {
            paragraphElement.style.opacity = 1;
        }
    }

    headingElement.style.opacity = 1;
    typeHeading();
});
