document.addEventListener('DOMContentLoaded', function () {
    const chatArea = document.getElementById('chatbot');
    const userInput = document.getElementById('user-input');

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatArea.appendChild(messageElement);
    }

    function botReply(userMessage) {
        // You can customize the bot's responses here
        const responses = {
            'hi':'hello there! how can i help you?',
            'hello': 'Hi there! whats your name? ',
            'how are you': 'I am just a bot, but thanks for asking!',
            'default': "I'm sorry, I didn't understand that.",
        };

        const normalizedUserMessage = userMessage.toLowerCase();
        const response = responses[normalizedUserMessage] || responses['default'];
        appendMessage('samy', response);
    }

    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const userMessage = userInput.value.trim();
            if (userMessage !== '') {
                appendMessage('You', userMessage);
                botReply(userMessage);
                userInput.value = '';
            }
        }
    });
});
