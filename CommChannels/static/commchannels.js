
document.addEventListener('DOMContentLoaded', () => {

  // Login firt time access
  if (!localStorage.getItem('loginname')){

    //First time access

    //Form to login visible
    document.querySelector('#layout').querySelector("#form-loginname").style.visibility = "visible";

    // By default, submit button is disabled. Enable if there's text name
    document.querySelector('#submit-loginname').disabled = true;

    document.querySelector('#text-loginname').onkeyup = () => {
        if (document.querySelector('#name').value.length > 0)
          document.querySelector('#submit-loginname').disabled = false;
        else
          document.querySelector('#submit-loginname').disabled = true;
    }

    // Get text-loginname and set at localStorage
    document.querySelector('#layout').querySelector("#form-loginname").onsubmit = () => {
        alert("Submit - Tengo nombre");
        localStorage.setItem('loginname', document.querySelector('#text-loginname').value);

        document.querySelector('#layout').querySelector("#form-loginname").style.visibility = "hidden";

    }
  } else {
    // It's not first time access
    document.querySelector('#layout').querySelector("#form-loginname").style.visibility = "hidden";
  }

  // Display the loginname
  document.querySelector('#loginname').innerHTML = localStorage.getItem('loginname');


});
