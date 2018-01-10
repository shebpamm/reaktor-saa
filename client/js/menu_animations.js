function onEnter(e) {
  $(e.target).addClass("active")
  $(e.target).animate({height : 300}, 600, function() {
    $(".test").show()
  })
}

function onLeave(e) {
  $(e.target).removeClass("active")
  $(e.target).animate({height : auto}, 600, function() {
    $(".test").show()
  })
}


$( document ).ready(function() {
    menus = $('.list-row');
    menus.hover(onEnter, onLeave);
  //  menus.bind('oanimationend animationend webkitAnimationEnd', animationDone(e))
});
