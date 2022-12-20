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
    "I learned programming in high school for National Olympiad in Informatics in Provinces (NOIP).",
    "I have completed my Bachelor's Degree in Computer Science at Beijing Forestry University (BFU).",
    "During my undergrad, I was so passionate about ACM-ICPC (International Collegiate Programming Contest), which was not so popular in my university (BFU) at the time. I took the training at Peking University and China University of Geosciences and brought the knowledge back to BFU. We started a student organization to help people better prepare for the competition. Finally, we won the first ACM-ICPC medal in BFU's history. The student organization keeps functioning and winning medals every year afterward.",
    "I completed my Master's Degree in Computer Science at Beijing University of Posts and Telecommunications (BUPT).",
    "I completed my Doctoral Degree in Computer Science at Texas A&M University (TAMU). My research interest is Automated Machine Learning (AutoML).",
    "You can find a list of my publications on <a href='https://scholar.google.com/citations?user=OAj0lr0AAAAJ&hl=en'>Google Scholar</a>.",
    "I developed AutoKeras and started to collaborate with the Keras team from Google during my PhD study.",
    "During my internships at Google, I was involved in the initial design and development of KerasTuner.",
    "I did three internships on the Keras team at Google, the spans of which adds up to a year before I officially joined as a full-time employee.",
    "As a software engineer on the Keras team, I lead the AutoML-related software (KerasTuner and AutoKeras) in the Keras/TensorFlow Ecosystem.",
    "To ramp up my work when I first joined the Keras team, I did a project to explain the Keras codebase, which you can find it <a href='https://haifeng-jin.github.io/keras-source/'>here</a>.",
    "As the Keras code moved out of the TensorFlow repo into a separate repo, I helped optimized the open-source contributing experience of Keras from various aspects, which significantly improved the efficiency for creating and accepting pull requests from external contributors."
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