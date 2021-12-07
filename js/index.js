function copyEmailToClipboard () {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   str = 'jhfjhfj1'
   str += '@'
   str += 'gmail'
   str += '.com'
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
