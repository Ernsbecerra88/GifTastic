

// Initial array of button
var rapers = ["Logic", "J Cole", "Kendrick Lamar", "Childish Gambino"];

function displayGifInfo() {




    //createing var to referance search
    var person = $(this).attr("data-person");
    // here we are linking to giphy and asking for 10 results for each actor
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";
    // here we are making the call to GET data from URL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#gif-view").text(JSON.stringify(response));
    });
}
// Function for displaying gif data
function renderButtons() {

    // Deleting the buttons prior to adding new button

    $("#buttons-view").empty();

    // Looping through the array of buttons
    for (var i = 0; i < rapers.length; i++) {

        // Then dynamically generating buttons for each gif in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of gif to our button
        a.addClass("button");
        // Adding a data-attribute
        a.attr("data-person", rapers[i]);
        // Providing the initial button text
        a.text(rapers[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}
// This function handles events where one button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var button = $("#gif-input").val().trim();

    // Adding the gif from the textbox to our array
    rapers.push(button);
    console.log(button);

    // Calling renderButtons which handles the processing of our gif array
    renderButtons();
});

// Function for displaying the gif info

$(document).on("click", ".button", displayGifInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();
///value on gif input should return data from gif api