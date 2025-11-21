function toggeChatContainer() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.classList.contains("visible")) {
        chatContainer.classList.remove("visible");
    } else {
        chatContainer.classList.add("visible")
    }
}

function ask_common_question(question_type) {
    
}


function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    const text = input.value.trim();
    if (text === '') return;

    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    chatBody.appendChild(userMsg);

    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.textContent = getAnswer(text);
    chatBody.appendChild(botMsg);

    input.value = '';

    chatBody.scrollTop = chatBody.scrollHeight;
}

function getAnswer(input) {
    input = input.toLowerCase();

    if (input.includes("wer") && (input.includes("du") || input.includes("bist"))) return "Ich bin ein Chatbot. Wie kann ich dir helfen?";
    if (input.includes("was") && input.includes("das")) return "Das ist eine Firmen Seite";
    if ((input.includes("wo") || input.includes("was")) && (input.includes("kauf") || input.includes("bekomm") || input.includes("bekomm"))) return "Schau dafür mal in unserem Online Shop nach.";
    if (input.includes("wie") && input.includes("funktion")) return "Ich erkenne Schlüsselwörter in deiner Nachricht (bei dieser hier zum Beispiel: 'wie' und 'funktion') und antworte entsprechend darauf.";
    if (input.includes("hilfe")) return "Klar, wobei brauchst du Hilfe?";
    if ((input.includes("hi") || input.includes("hey") || input.includes("hallo") || input.includes("hi") || (input.includes("was") && input.includes("geh"))) && !(input.includes("hier"))) return "Hallo, wie kann ich dir helfen?";

    const testKeywords = ["test", "abcde", "12345", "lorem"];

    if (testKeywords.some(keyword => input.includes(keyword))) {
        return "Test zurück der Herr :)";
    }


    if (input.includes(testKeywords[0])) return "Test zurück der Herr :)";

    return "Das habe ich leider nicht verstanden. Versuch deinen Satz eindeutiger zu formulieren. Am besten als Frage.";
}