function toggeChatContainer() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle("visible");
}

function toggle_info_visibility() {
    const overlay = document.getElementById("info-overlay");
    overlay.classList.toggle("visible");
}

function ask_common_question(question) {
    if (typeof question !== "string") {
        throw new Error("question must be a string");
    }
    sendMessage(question);
}

async function sendMessage(question) {
    const chatBody = document.getElementById('chat-body');

    let text = question;

    if (typeof question !== "string" || question === null) {
        const input = document.getElementById('user-input');
        text = input.value.trim();
        if (text === "") return;
        input.value = "";
    }

    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    chatBody.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';

    const answer = await getAnswer(text);
    botMsg.textContent = answer;

    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
}

async function getAnswer(userquestion) {
    if (userquestion.includes("test")) {
        return "Test zurück der Herr :)";
    }

    try {
        const res = await fetch("http://localhost:8080/question", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: userquestion })
        });

        const data = await res.json();
        return String(data.answer || "toll");
    } catch (e) {
        return "Es gab einen Fehler mit dem Server";
    }
}
