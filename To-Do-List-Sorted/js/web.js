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
            'hi': 'Hello there! How can I assist you?',
            'hello': "Hi there! What's your name?",
            'how are you': 'I am just a bot, but thanks for asking!',
            'what is your purpose': 'My purpose is to assist you with any questions or tasks you have.',
            'who created you': 'I was created by a team of developers at Taskmasters.',
            'what time is it': `I'm sorry, I don't have access to real-time information.`,
            'tell me a joke': 'Why don’t scientists trust atoms? Because they make up everything!',
            'what is the meaning of life': `That's a tough one. The meaning of life is subjective and varies from person to person.`,
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
