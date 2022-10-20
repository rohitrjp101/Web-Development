// Changing color using jQuery
// $("h1").css("color", "red");

//to add css classes to an element
$("h1").addClass("big-title margin-50");


//Adding event listener
$("button").click(function(){
    $("h1").css("color", "purple");
});

// keyboard event listener
$(document).keydown(function(event){
    $("h1").text(event.key);
});

// another way of implementing event listener
$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
});