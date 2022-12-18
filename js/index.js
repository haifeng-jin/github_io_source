function copyEmailToClipboard () {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   str = 'haifeng.jin'
   str += '@'
   str += 'pm'
   str += '.me'
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
   alert('Email address copied to clipboard!', 3000);
}

function alert(message, duration) {
    var alertPlaceholder = document.getElementById('alert_placeholder')
    alertPlaceholder.innerHTML = '<div id="top_alert" class="alert alert-secondary alert-top fade show" role="alert">' + message + '</div>'
  setTimeout(function(){
    alertPlaceholder.innerHTML = ''
  }, duration);
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

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

messages = [
    "I learned programming during my high school study to participate in National Olympiad in Informatics in Provinces (NOIP).",
    "I studied as an undergrad in computer science at Beijing Forestry University (BFU).",
    "During my undergrad, I was so passionate about ACM-ICPC (International Collegiate Programming Contest), which was not so popular in my university (BFU) at the time. I took the training at Peking University and China University of Geosciences, and bring the things I learned back to BFU. We started a student organization to help people better prepare for the competition. Finally, we won the first ACM-ICPC medal in BFU's history. The student organization keeps functioning and winning medals every year afterwards.",
    "I completed my Master's Degree in computer science at Beijing University of Posts and Telecommunications (BUPT).",
    "I completed my PhD in computer science at Texas A&M University (TAMU). My research interest is automated machine learning (AutoML).",
    "You can find a list of my publications on <a href='https://scholar.google.com/citations?user=OAj0lr0AAAAJ&hl=en'>Google Scholar</a>.",
    "I developed AutoKeras and started to collaborate with the Keras team from Google during my PhD study.",
    "During my internships at Google, I participated in the design and development of KerasTuner.",
    "I did three internships on the Keras team at Google, which accumulates up to a year of experience before I officially joined as a full-time employee.",
    "As a software engineer on the Keras team, I lead the AutoML-related software, KerasTuner and AutoKeras, in the Keras/TensorFlow Ecosystem.",
    "As I join the Keras team, I started on a project to explain the Keras codebase to ramp up my work, which you can find it <a href='https://haifeng-jin.github.io/keras-source/'>here</a>.",
    "As the Keras code moving out of the TensorFlow repo into its own repo, I helped optimized the open-source contributing experience of Keras from various aspects, which significantly efficiency for creating and accepting pull requests from external contributors."
];
shuffle(messages);
counter = 0;

function refresh_message() {
    message = messages[counter];
    counter = (counter + 1) % messages.length;
    transition_time = 500;
    $('#message-text').html(message).fadeIn(transition_time);
    timeout = message.length * 100;
    window.setTimeout(function() {$('#message-text').html(message).fadeOut(transition_time);}, timeout + transition_time);
    window.setTimeout(refresh_message, timeout + transition_time * 2);
    $('#progress').css('width', '100%');
    $('#progress').animate({width: '0%'}, timeout + transition_time);
}

window.onload = (event) => {
    refresh_message()
};

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}