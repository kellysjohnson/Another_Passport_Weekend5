

// Append Users
function appendData(userData) {
    $('.appendhere').append(userData);
}

// AJAX call to pull user Data
function getUsers(data) {
    $.ajax({
        url: '/public/views/register',     //where are my USERS??????
        dataType: 'json',
        method: 'get',
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