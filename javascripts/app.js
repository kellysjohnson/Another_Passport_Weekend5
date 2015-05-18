

// Append Users
function appendData(userData) {
    for (var j = 0; j < userData.length; j++) {
        $('.appendhere').append(userData[j].username + "<br>");
    }
}

// AJAX call to pull user Data
function getUsers(data) {
    $.ajax({
        type: 'GET',
        url: '/users/getData',                              //  where are my USERS??????   Answer: you have to look for them in /getData.
        datatype: 'application/json',                       //  This is after creating a route
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