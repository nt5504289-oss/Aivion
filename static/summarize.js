document.getElementById("sendButton").addEventListener("click", async function(e) {
    e.preventDefault();

    console.log("Clicked!");

    const userText = document.getElementById("input1").value.trim();
    const output = document.getElementById("summaryOutput");

    if (!userText) {
        output.value = "Please enter some text 😐";
        return;
    }

    output.value = "Typing... ⏳";

    try {
        const response = await fetch("/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userText })
        });
        // YOU SEND THE DATA TO BACKEND FROM HERE

        const data = await response.json();
        console.log(data);

        // CONVERTS JSON INTO TEXT
        if (data.error) {
            output.value = "Error: " + data.error;
        } else {
            output.value = data.result;
        }

    } catch (error) {
        console.error("Error:", error);
        output.value = "Something went wrong 🚨";
    }
});


// Copy button
function copyText() {
    const text = document.getElementById("summaryOutput");

    if (!text.value) {
        alert("Nothing to copy 🤷‍♂️");
        return;
    }

    navigator.clipboard.writeText(text.value)
        .then(() => alert("Copied! ✅"))
        .catch(() => alert("Copy failed ❌"));
}