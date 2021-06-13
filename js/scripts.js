$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".fade").click(function() {
    $("#walrus-fade-in").fadeToggle();
    $("#walrus-fade").fadeToggle();
  });
});

$(document).ready(function() {
  $(".slide").click(function() {
    $("#walrus-slide-up").slideToggle();
    $("#walrus-slide-down").slideToggle();
  });
});
