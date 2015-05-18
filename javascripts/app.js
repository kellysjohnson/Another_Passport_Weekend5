

// Append Users
function appendData(userData) {
    var containsData = '<div class="holder" "small">';

    for (var j = 0; j < userData.length; j++) {
        containsData += '<div class="style"><div> username: ' + userData[j].username + '</div><div> firstname: ' + userData[j].firstname + '</div><div> lastname: ' + userData[j].lastname + '</div><div> email: ' + userData[j].email + '</div></div><br/>'
    }
    $('.appendhere').append(containsData + '</div>');
    console.log(containsData);
}

// AJAX call to pull user Data
function getUsers(data) {
    $.ajax({
        type: 'GET',
        url: '/users/getData',                              //  where are my USERS??????   Answer: you have to look for them in /getData.
        datatype: 'json',                       //  This is AFTER creating a route *app.get('/getData')* where the Users.find method is performed.
        success: function (response) {
            console.log("Some Data", response);
            appendData(response);
        },
        error: function (err) {
            console.log("data get epic fail");
            console.log(err);
        }
    });
}

//else {
//    console.log("You are not allowed in!");
//}

$(document).ready(function (){
    getUsers();
});