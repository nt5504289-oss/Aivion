async function sendMessage() {
    const userInput = document.getElementById("userInput");
    const userText = userInput.value.trim();
    const output = document.getElementById("o-area");

    if (!userText) {
        output.value = "Type something first 😐";
        return;
    }

    output.value = "Typing... ⏳";
    userInput.value = "";

    try {
        const response = await fetch("https://aivion.onrender.com/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userText })
        });

        const data = await response.json();

        if (data.error) {
            output.value = "Error: " + data.error;
        } else {
            output.value = data.result;
        }

    } catch (error) {
        console.error("Error:", error);
        output.value = "Something went wrong 🚨";
    }
}


document.getElementById("sendButton")
    .addEventListener("click", sendMessage);

document.getElementById("userInput")
    .addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });


const btn = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar1");
const close = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

btn.onclick = () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
};

close.onclick = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
};