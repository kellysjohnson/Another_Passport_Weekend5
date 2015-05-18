

// Append Users
function appendData(userData) {
    $('.appendhere').append(userData);
}

// AJAX call to pull user Data
function getUsers() {
    $.ajax({
        url: '..views/register',     //where are my USERS??????
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

$(document).ready(function (){
   $('.content').on("click", '.list', function (){
        getUsers();
   });
});