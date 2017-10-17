$(document).ready(function() {

  $("button#make-dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-page");
  });

  $("button#make-light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-page");
  });
});
