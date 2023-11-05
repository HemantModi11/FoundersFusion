// JavaScript for the Startup Forum

const forum = document.getElementById("forum");
let messageId = 1;

function postMessage() {
    const usernameInput = document.getElementById("usernameInput");
    const messageInput = document.getElementById("messageInput");
    const username = usernameInput.value.trim();
    const messageText = messageInput.value.trim();

    if (username && messageText) {
        const message = createMessage(username, messageText);
        forum.appendChild(message);
        usernameInput.value = "";
        messageInput.value = "";
    }
}

function createMessage(username, text) {
    const message = document.createElement("div");
    message.className = "message";
    message.innerHTML = `
        <p><strong>${username}:</strong> ${text}</p>
        <button onclick="replyToMessage(this)">Reply</button>
        <button class="like-button" onclick="likeMessage(this)">&#10084;</button>
    `;
    message.dataset.id = messageId++;
    return message;
}

function replyToMessage(button) {
    const parentMessage = button.parentNode;
    const replyInput = document.createElement("input");
    replyInput.placeholder = "Type your reply...";
    const replyButton = document.createElement("button");
    replyButton.textContent = "Reply";
    replyButton.onclick = function () {
        const replyText = replyInput.value.trim();
        if (replyText) {
            const reply = createReply(replyText);
            parentMessage.appendChild(reply);
            replyInput.remove();
            replyButton.remove();
        }
    };
    parentMessage.appendChild(replyInput);
    parentMessage.appendChild(replyButton);
}

function createReply(text) {
    const reply = document.createElement("div");
    reply.className = "reply";
    reply.innerHTML = `<p>${text}</p>`;
    return reply;
}

function likeMessage(button) {
    button.classList.add("liked");
    button.disabled = true;
}

// Additional JavaScript for other features can be added here