console.log('it works');

// This command tells me the JS file is ready!
$(document).ready(function () {

    // The bellow command is for when the button is clicked
    // we want to run this function!
    $('.submit_button').click(function (event) {

        var name = $('.name').val(); //Pulls the name information from input, reference the class
        var email = $('.email').val();//Pulls the email information from input, reference the class
        var message = $('.message').val(); //Pulls the message information from input, reference the class
        var statusELm = $('.status');
        var statusELm = $('.status');
        var statusELm = $('.status');
        statusELm.empty();

        // Creating criteria for inputs to determineif information is Valid.
        if (name.length >= 2) {
            console.log('hello');
        } else {
            event.preventDefault(); //Prevents default action
            statusELm.append('<div>Name is invalid</div>');//Creates a new div
        }

        if (email.length >= 2 && email.includes('@') && email.includes('.')) {
        } else {
            event.preventDefault(); //Prevents default action
            statusELm.append('<div>Email is invalid</div>');//Creates a new div
        }

        //Creates a new div
        if (message.length >= 10) {
        } else {
            event.preventDefault(); //Prevents default action
            statusELm.append('<div>Message is invalid</div>');//Creates a new div
        }

})
})