var menuHeight;
var numofentries = 9;

function onClick(e) {
  if($(e.target).closest('.content').length) return; //Check that menu is not triggered from content box
  var elem = $(e.target).hasClass('list-row') ? $(e.target) : $(e.target).closest('.list-row'); //Check if element clicked was list-row or a child of it. Assign list-row to elem
  if (elem.hasClass('active')) Close(elem);
  else Open(elem);
}

function Open(elem) {

  var headerHeight = elem.find('.location').height()

  elem.addClass('active')
  elem.find('.temperature').addClass("active-temp")
  elem.find('.content').show(600);
  elem.animate({height : 300}, 600, function() {
  })
}

function Close(elem) {
  elem.removeClass('active')
  elem.find('.temperature').removeClass("active-temp")
  elem.find('.content').hide(300);
  elem.animate({height: menuHeight}, 600, function(){
  });
  elem.css('height', 'auto')
}

function resizeInput(e) {
  $(e.target).animate({width : 25}, 600)
  $(e.target).attr('placeholder', '');
}

function resizeInputDown(e) {
  $(e.target).animate({width : 100}, 600, function() {
    $(e.target).attr('placeholder', 'Uusi Lämpötila...');
  })

}

$( document ).ready(function() {
    menus = $('.list-row');
    menuHeight = menus.first().height();
    menus.click(onClick);
    $("#tempInput").focus(resizeInput)
    $("#tempInput").blur(resizeInputDown)

  //  menus.bind('oanimationend animationend webkitAnimationEnd', animationDone(e))
});
