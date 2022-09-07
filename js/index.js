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
    // Knowledges
    "Moore's law: the number of transistors in a dense integrated circuit doubles about every two years.",
    "Andy and Bill's law: new software will always consume any increase in computing power that new hardware can provide.",
    "Conway's law: organizations design systems mirror their own communication structure.",
    "Amdahl's law helps computing the overall speedup of a task if one portion of it has a certain speedup.",
    // Thoughts
    "Keep unit tests simple and understandable at a glance. Otherwise, the testing code itself is prone to bugs. When writing code, we always want to reduce code duplication. However, writing tests is an exception, because reducing code duplication to the extreme may harm the tests' readability. In summary, we need to balance between better readability and less duplication.",
    "We should use the <a href='http://semver.org'>Semantic Versioning</a> system for software's version numbers. It is a common way to communicate with the users about how much was the software changed compared to its predecessors.",
    "As working from home becoming the new norm, working from home while keeping a high productivity becomes an essential skill.",
    "Maintaining good health and physical condition is critical to the success in one's career in the long run. This is the ultimate Long-termism.",
    "People see AI as the new electricity. To use electricity, you simply plug your charger into the wall. To use AI, you need to learn a whole new curriculum. Still a long way to go, and full of opportunities.",
    "The prevalence of open-source software makes designing, developing and maintaining open-source software a highly demanded skill nowadays, which includes but is not limited to communicating with the open-source community, and familiarity with the open-source dev process and toolchains.",
    "My career path is so smooth so far. I have never suffered from any real failure before, which is not normal. I should expect a big failure to come in the future, and I need to be mentally and physically prepared for it.",
    "Learning the foundational courses in computer science, e.g., operating systems, data structures, and computer networks, is helpful for a software engineer, even if they are not used directly in the development. The core concepts in these courses are the common language of software engineers in their daily communication at work.",
    "An average open-source developer would usually worry about they should also invest time in the widely used technologies instead of solely focusing on their own open-source software. However, the best open-source developers will make their software the widely used technology that many other developers need to learn.",
    "Learning design patterns and refactoring is more of a brain exercise than learning a collection of solutions. When facing actual projects, it is all about how to optimize the code structure towards the principles, like low coupling and high cohesion, rather than applying predefined patterns.",
    "As an individual contributor, one's leadership is reflected by always thinking from the team's perspective and ready to take responsibility to solve the most important problems.",
    // Experiences
    "I learned programming during my high school study to participate in National Olympiad in Informatics in Provinces (NOIP).",
    "I studied as an undergrad in computer science at Beijing Forestry University (BFU).",
    "I completed my Master's Degree in computer science at Beijing University of Posts and Telecommunications (BUPT).",
    "I completed my Ph.D. in computer science at Texas A&M University (TAMU). My research interest is AutoML.",
    "I did three internships on Keras team at Google, which accumulates up to a year before I officially joined as a full-time employee.",
    "I developed AutoKeras during my Ph.D. study and started the collaboration with Keras team from Google.",
    "During my internships at Google, I was involved in the initial design and development of the KerasTuner project.",
    "During my undergrad, I was so passionate about ACM-ICPC (International Collegiate Programming Contest), which was not so popular in my university (BFU) at the time. I took the training at Peking University and China University of Geosciences, and bring the things I learned back to BFU. We started a student organization to help people better prepare for ACM-ICPC. Finally, we won the first ACM-ICPC medal in BFU's history. Though, it was a bronze medal. LOL",
    "As I join the Keras team, I started on a project to explain the Keras codebase to ramp up my work, which you can find it <a href='https://haifeng-jin.github.io/keras-source/'>here</a>.",
    "More about how I learned computer science from high school all the way to post-graduate can be found <a href='https://zhuanlan.zhihu.com/p/362678578'>here</a>. You will see a story full of good luck. It is written in Chinese BTW.",
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
