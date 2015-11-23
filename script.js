$(function() {
  $("li").on("click", function(event) {
    var target = $(event.delegateTarget);
    var body = $(document.body);

    body.removeClass();
    body.addClass(target.data("selector"));

    $("ul > li").removeClass("selected");
    target.addClass("selected")
  });

  // Code to support toggling scripts
  $("#source").on("click", function(event) {
    $(".gist").toggle();
  });
});