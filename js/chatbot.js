document.getElementById("sendButton").addEventListener("click", async function() {

    const userText = document.getElementById("userInput").value.trim();
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
        console.log(data);

        if (data.error) {
            output.value = "Error: " + data.error;
        } else {
            output.value = data.result; // ✅ FIXED
        }

    } catch (error) {
        console.error("Error:", error);
        output.value = "Something went wrong 🚨";
    }
});