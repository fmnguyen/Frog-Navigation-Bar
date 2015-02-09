$(document).ready(function() {
  var first = false;

  function toggleNavigation(navigationState) {
    var width;
    $(".nav-bar-item").each(function(index) {
      if (navigationState === true) {
        width = -$(this).width()-$("#logo").width();
        $("#logo").removeClass("open");
      } else {
        width = 0;
        if (index === 0) {
          width = $("#logo").width();
        }
        $("#logo").addClass("open");
      }
      $(this).css("margin-left", width);
    });
  }

  $("#logo").click(function(evt) {
    var navState = $("#logo").attr("class");
    if (navState === "open") {
      toggleNavigation(true);
    } else {
      toggleNavigation(false);
    }
  });

  // switches between nav-bar if scroll is farther than 15
  $(window).scroll(function() {
    var scrollHeight = $(document).scrollTop();
    if (scrollHeight <= 80) {
      toggleNavigation(false);
      first = false;
    } else {
      if (first === false) {
        toggleNavigation(true);
        first = true;
      }
    }
  });
});