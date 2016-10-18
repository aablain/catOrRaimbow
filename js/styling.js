$(document).ready(function() {
  $("#clickable1").click(function() {
    $("initially-hidden").toggle();


    var randImage= Math.floor(Math.random()*9);
    var path= "img/image" + randImage+".jpg";
    $("#image1").attr("src",path);
  });
  $("#clickable2").click(function() {
    $("initially-hidden").toggle();


    var randImage= Math.floor(Math.random()*9);
    var path= "img/image" + randImage+".jpg";
    $("#image2").attr("src",path);
  });
  $("#clickable3").click(function() {
    $("initially-hidden").toggle();


    var randImage= Math.floor(Math.random()*9);
    var path= "img/image" + randImage+".jpg";
    $("#image3").attr("src",path);
  });

});
