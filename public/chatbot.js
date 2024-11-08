document.getElementById("chatForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userMessage = document.getElementById("userMessage").value.trim();
    
    if (userMessage) {
        addMessageToChat(userMessage, "user-message");
        fetchResponse(userMessage);
        document.getElementById("userMessage").value = "";
    }
});

function addMessageToChat(message, messageType) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.className = messageType;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function fetchResponse(message) {
    // Mock response function - integrate server response here
    const botResponse = `Analyzing... Based on your input, here’s some advice. Please wait a moment.`;
    
    // Display bot response
    addMessageToChat(botResponse, "bot-message");

    // Insert actual logic for generating response here, based on stored user data in the backend
}
