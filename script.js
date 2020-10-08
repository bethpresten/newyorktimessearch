// console.log("hello!")
$(document).ready(function () {

    var searchTerm = $("#search-text").val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=kfGFOULG8iY3entyKXyPOWydalm0IAuV";



    $("#searchBtn").on("click", function (response) {
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response.docs.abstract);
        });
        $("#result-one").text(JSON.stringify(response));
    });


});