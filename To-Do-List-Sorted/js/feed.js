function validateForm() {
    var name = document.getElementById('name').value;
    var feedbackType = document.getElementById('feedbackType').value;
    var comments = document.getElementById('comments').value;

    if (name === '' || feedbackType === '' || comments === '') {
        alert('Please fill in all fields');
        return false;
    }

    alert('Feedback submitted successfully:\nName: ' + name + '\nFeedback Type: ' + feedbackType + '\nComments: ' + comments);
    return true;
}
function myfeed() {
    // Get form values
    var Username = document.getElementById('Username').value;
    var feedbackType = document.getElementById('feedbackType').value;
    var comments = document.getElementById('comments').value;

    // Create feedback object
    var feedbackData = {
        Username : Username,
        feedbackType: feedbackType,
        comments: comments
    };

    // Get existing feedback array from localStorage or create a new one
    var existingFeedback = JSON.parse(localStorage.getItem('feedback')) || [];

    // Add new feedback to the array
    existingFeedback.push(feedbackData);

    // Convert the array to JSON string and store in localStorage
    localStorage.setItem('feedback', JSON.stringify(existingFeedback));

    // Clear form
    document.getElementById('feedbackForm').reset();

    alert('Feedback submitted successfully!');
}