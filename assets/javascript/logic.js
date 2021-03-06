﻿//Adding click event listener to Hero Buttons
$("button").on("click", function() {
  //Getting and storing the data-hero property value from the button
  var hero = $(this).attr("data-warcrafthero");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    hero +
    "&api_key=lnqus135S8xxGpofIXcYzvh1Nn7367Re&limit=3";

  //Conducting and AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(queryURL);
    console.log(response);

    var results = response.data;

    //Looping over results
    for (var i = 0; i < results.length; i++) {
      // Creating div with class "item"
      var gifHeroDiv = $("<div class='item'>");
      // Creating image tag
      var heroImage = $("<img>");

      heroImage.attr("src", results[i].images.fixed_width.url);
      gifHeroDiv.append(heroImage);
      $("#gifs-location").prepend(gifHeroDiv);
    }
    // Attempt at trying to pause and play the images that were pulled from giphy
    $(heroImage).on("click", function() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", results[i].images.fixed_width.url);
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", results[i].images.fixed_width_still.url);
        $(this).attr("data-state", "still");
      }
    });
  });
});
