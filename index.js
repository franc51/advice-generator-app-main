document.addEventListener("DOMContentLoaded", () => {
    const adviceIdElement = document.getElementById("advice-id");
    const adviceTextElement = document.getElementById("advice-text");
    const adviceButton = document.getElementById("advice-button");

    const fetchAdvice = async () => {
        try {
            const response = await fetch("https://api.adviceslip.com/advice", {
                cache: "no-cache", // Ensures a fresh response from the API
            });
            const data = await response.json();

            // Update the HTML with the fetched advice
            adviceIdElement.textContent = `ADVICE #${data.slip.id}`;
            adviceTextElement.textContent = data.slip.advice;
        } catch (error) {
            console.error("Failed to fetch advice:", error);
            adviceTextElement.textContent = "Sorry, something went wrong. Please try again!";
        }
    };

    // Fetch advice on button click
    adviceButton.addEventListener("click", fetchAdvice);
});
