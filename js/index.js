function copyEmailToClipboard() {
    // Set value (string to be copied)
    email_str = 'haifeng.jin'
    email_str += '@'
    email_str += 'pm'
    email_str += '.me'
    // Copy text to clipboard
    navigator.clipboard.writeText(email_str);
    alert('Email address copied to clipboard!', 3000);
}

function alert(message, duration) {
    var alertPlaceholder = document.getElementById('alert_placeholder')
    alertPlaceholder.innerHTML = '<div id="top_alert" class="alert alert-secondary alert-top fade show" role="alert">' + message + '</div>'
    setTimeout(function () {
        alertPlaceholder.innerHTML = ''
    }, duration);
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

var messages = [
    "I learned programming in high school for the <a href='https://en.wikipedia.org/wiki/National_Olympiad_in_Informatics'>National Olympiad in Informatics in Provinces (NOIP)</a>.",
    "I have completed my Bachelor's Degree in Computer Science at <a href='https://www.usnews.com/education/best-global-universities/beijing-forestry-university-528815'>Beijing Forestry University (BFU)</a>.",
    "During my undergrad, I was so passionate about the <a href='https://icpc.global/'>International Collegiate Programming Contest (ACM-ICPC)</a>, which was not so popular in my university at the time. I took the training at Peking University and China University of Geosciences and brought the knowledge back to BFU. We started a student organization to help people better prepare for the competition. Finally, we won the first ACM-ICPC medal in BFU's history. The student organization keeps functioning and winning medals every year afterward.",
    "I completed my Master's Degree in Computer Science at <a href='https://www.usnews.com/education/best-global-universities/beijing-university-of-posts-telecommunications-502130'>Beijing University of Posts and Telecommunications (BUPT)</a>.",
    "I completed my Doctoral Degree in Computer Science at <a href='https://www.tamu.edu/'>Texas A&M University (TAMU)</a>. My research interest is <a href='https://en.wikipedia.org/wiki/Automated_machine_learning'>Automated Machine Learning (AutoML)</a>.",
    "You can find a list of my publications on <a href='https://scholar.google.com/citations?user=OAj0lr0AAAAJ&hl=en'>Google Scholar</a>.",
    "I developed <a href='https://autokeras.com/'>AutoKeras</a> and started to collaborate with the Keras team from Google during my PhD study. AutoKeras is an AutoML library for deep learning. To use it, the user only need to provide the training data and to define the task.",
    "During my internships at Google, I was involved in the initial design and development of <a href='https://github.com/keras-team/keras-tuner'>KerasTuner</a>, which is a hyperparameter tuning library for Keras and more.",
    "I did three internships on the Keras team at Google, the spans of which adds up to a year before I officially joined as a full-time employee.",
    "As a software engineer on the Keras team, I lead the AutoML-related software (<a href='https://github.com/keras-team/keras-tuner'>KerasTuner</a> and <a href='https://autokeras.com/'>AutoKeras</a>) in the Keras/TensorFlow Ecosystem.",
    "We published a book on AutoML, titled <a href='https://www.manning.com/books/automated-machine-learning-in-action?query=automated&utm_source=jin&utm_medium=affiliate&utm_campaign=affiliate&a_aid=jin'>Automated Machine Learning in Action</a>, with Manning Publications.",
    "To ramp up my work when I first joined the Keras team, I did a project to explain the Keras codebase, which you can find it <a href='https://haifeng-jin.github.io/keras-source/'>here</a>.",
    "As the <a href='https://keras.io/'>Keras</a> code moved out of the <a href='https://tensorflow.org/'>TensorFlow</a> repo into a separate repo, I helped optimized the open-source contributing experience of Keras from various aspects, which significantly improved the efficiency for creating and accepting pull requests from external contributors."
];
shuffle(messages);
var counter = -1;
var transition_time = 500;
var timeout_handler = null;

function get_message() {
    return messages[counter];
}

function get_timeout() {
    return get_message().length * 100;
}

function load_message() {
    document.querySelector('#message-text').innerHTML = get_message();
    var element = document.querySelector('#footer-section');
    element.classList.add('fadein');
    element.classList.remove('fadeout');
}

function remove_message() {
    var element = document.querySelector('#footer-section');
    element.classList.remove('fadein');
    element.classList.add('fadeout');
}

function reset_progress_bar() {
    $('#progress').stop();
    $('#progress').css('width', '100%');
    $('#progress').animate({ width: '0%' }, get_timeout() + transition_time);
}

function next_message() {
    window.clearTimeout(timeout_handler);
    remove_message();
    counter = (counter + 1) % messages.length;
    window.setTimeout(refresh_message, transition_time);
}

function previous_message() {
    window.clearTimeout(timeout_handler);
    remove_message();
    counter = (counter - 1 + messages.length) % messages.length;
    window.setTimeout(refresh_message, transition_time);
}

function refresh_message() {
    load_message();
    reset_progress_bar();
    timeout_handler = window.setTimeout(next_message, get_timeout() + transition_time * 2);
}

window.onload = (event) => {
    next_message()
};

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}