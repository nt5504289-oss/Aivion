document.getElementById("myButton").addEventListener("click", async function() {

    const userText = document.getElementById("text-input").value.trim();
    const output = document.getElementById("summary-output");

    if (!userText) {
        output.innerText = "Type something first 😐";
        return;
    }

    output.innerText = "Typing... ⏳";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userText })
        });

        const data = await response.json();
        console.log(data);

        if (data.error) {
            output.innerText = "Error: " + data.error;
        } else {
            output.innerText = data.result; // ✅ FIXED
        }

    } catch (error) {
        console.error("Error:", error);
        output.innerText = "Something went wrong 🚨";
    }
});