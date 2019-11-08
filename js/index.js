function copyEmailToClipboard () {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   str = 'jin'
   str += '@'
   str += 'tamu'
   str += '.edu'
   el.value =  str;
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
   alert('Email address copied to clipboard!', 1000);
}

function alert(message, duration) {
  $('#alert_placeholder').html('<div id="top_alert" class="alert alert-primary alert-top fade show">'+message+'</div>')
  setTimeout(function(){
    $("#top_alert").alert('close');
  }, duration);
}
