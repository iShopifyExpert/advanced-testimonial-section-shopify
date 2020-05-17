var colors = ["red", "orange", "yellow", "green", "blue"];
var currentIndex = 0;

$(".slider").on("beforeChange", function (){
    $(".content").css("background-color", colors[currentIndex++%colors.length]);
});
