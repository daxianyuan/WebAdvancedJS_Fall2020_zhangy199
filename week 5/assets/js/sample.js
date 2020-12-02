//https://openweathermap.org/api
// We're going to work with the current weather
// You need to register in order to obtain a key

$(() => {

    /* 1. Let's create a function named loadData to make the JSON request*/
    //loadData();

    /* 7. Don't forget to call your new function */
    attachEvent();

});


/* 6. We don't want to load the data when the page loads anymore, we want to load it only
When we input a city on the searbar
Define function that hadles the request from the input on Search Bar*/

attachEvent = () => {

    $("#search-button").click(() => {
        loadData($("#date").val());


        $("#date").val([]);

    });
    $("#date").keypress((e) => {
        if (e.keyCode == 13) {
            loadData($("#date").val());

            $("#date").val([]);

        }

    });


}


loadData = () => {

        var meta = JSON.parse('https://epic.gsfc.nasa.gov/api/natural');
        $.ajax('https://epic.gsfc.nasa.gov/api/natural', {
            success: function(iDataArr, stat, xhr) {
                // do something with the list
            }
        });
    }
    /* 2. We already called the function loadData(), but we haven't created it yet*/

// loadData = () => {
//    
//     let date = $("#date").val();





//     if (date != '') {

//         /* 10. Ajax Call vs getJSON
//             This is where AJAX has the upper hand. AJAX can pull information from JSON API’s, 
//              but they also can pull information from XML API’s. It’s just a little bit more of a process.
//              https://medium.com/@KDweber89/ajax-vs-getjson-ca910fa6854e
//         */
//         $.ajax({









//             // url: "https://api.nasa.gov/planetary/apod?data=" + date + "&api_key=u514bm6uOurwgIq9DhmZ9s36KvRkCoKBbfLBrAY0",
//             // type: "GET",
//             // dataType: "json",
//             success: function(data) {



//                 console.log(data);
//                 // console.log(data.name);

//                 $("#error").empty();

//                 $(".icon").empty();
//                 $(".weather").empty();
//                 $(".temp").empty();
//                 $(".city-name").empty();

//                 // icon=pic
//                 let icon = JSON.url;
//                 // temp=date
//                 let temp = JSON.date;
//                 // weather=explanation
//                 let weather = JSON.explanation;
//                 // cityName=title
//                 let cityName = JSON.title;

//                 $(".icon").attr("src", icon);
//                 // Convert Kelvin to Farenheit - T(°F) = T(K) * 9/5 - 459.67
//                 // $(".weather").append(Math.floor(temp * 9 / 5 - 459.67) + " " + "°F");

//                 // //  Conver Kelvin to Celcius - T(°F) = T(K) - 273.15
//                 // $(".weather").append(Math.floor((temp - 273.15)) + " " + "°C");
//                 // $(".temp").append(weather);
//                 $(".city-name").append(cityName);
//                 // console.log(temp);
//             }

//         });

//         /* 11. Error message if the nothing is requested */

//     } else {
//         $("#error").html("City can't be empty");
//     }
// }





// JSON vs XML 
// https://restfulapi.net/json-vs-xml/