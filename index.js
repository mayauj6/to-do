//accesses the containers in HTML, assigns a variable
var container = $('.container');
// accesses the user's inputted task, assigns a variable
var taskinput = $('.task');
// accesses the submit button, assigns a variable
var submitButton = $('.submitButton');
// user's info


submitButton.on("click", storeInfo);

function storeInfo() {
  event.preventDefault();
  container.append(`<p class="chore"> ${taskinput.val()} </p>`);
}
