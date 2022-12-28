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

var messages = [];
var counter = -1;
var transition_time = 250;
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
    element.animate({ opacity: ['0', '1'] }, { duration: transition_time, iterations: 1 });
}

function remove_message() {
    var element = document.querySelector('#footer-section');
    element.animate({ opacity: ['1', '0'] }, { duration: transition_time, iterations: 1 });
}

function reset_progress_bar() {
    elem = document.querySelector("#progress");
    elem.getAnimations().forEach(function (animation) { animation.cancel(); });
    elem.animate({
        width: ['100%', '0%'],
    }, {
        // Count time from fadeout finish to fadeout start.
        duration: get_timeout() + transition_time,
        iterations: 1,
    });
}

function next_message() {
    window.clearTimeout(timeout_handler);
    remove_message();
    counter = (counter + 1) % messages.length;
    // Count the fadeout time.
    window.setTimeout(refresh_message, transition_time);
}

function previous_message() {
    window.clearTimeout(timeout_handler);
    remove_message();
    counter = (counter - 1 + messages.length) % messages.length;
    // Count the fadeout time.
    window.setTimeout(refresh_message, transition_time);
}

function refresh_message() {
    load_message();
    reset_progress_bar();
    // Count time from fadeout finish to fadeout start.
    timeout_handler = window.setTimeout(next_message, get_timeout() + transition_time);
}

window.onload = (event) => {
    document.querySelector('#messages').childNodes.forEach(function (elem) {messages.push(elem.innerHTML);});
    messages = messages.filter(x => x !== undefined);
    shuffle(messages);
    next_message();
};

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}