var menuHeight;
var numofentries = 9;

export function onClick(e) {
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
    elem.find('input').show(600);
  })
}

function Close(elem) {
  elem.removeClass('active')
  elem.find('.temperature').removeClass("active-temp")
  elem.find('input').hide(300);
  elem.find('.content').hide(300);
  elem.animate({height: menuHeight}, 600, function(){
  });
  elem.css('height', 'auto')
}

export function resizeInput(e) {
  $(e.target).animate({width : 25}, 600, function(){
    $('.addForm > button').show(100);
  })
  $(e.target).attr('placeholder', '');
}

export function resizeInputDown(e) {
  if(e.target.value != "") return;
  $(e.target).animate({width : 100}, 600, function() {
    $(e.target).attr('placeholder', 'Uusi Lämpötila...');
    $('.addForm > button').hide(100);
  })

}

export function inputCheck(e) {
  var val = e.target.value;
  if(e.key == '-' && val.length != 0) {
    e.preventDefault();
    e.stopPropagation();
  }
  if(e.key == '.' && val.replace('-', '').split('.').length == 1) {} else
  if ('0123456789-.'.indexOf(e.key) == -1 || (val.replace('-','').indexOf('.') == -1 && val.replace('-','').length > 1) || (val.replace('-','').indexOf('.') != -1 && val.replace('-','').slice(val.replace('-','').indexOf('.')).length > 2) ){
    e.preventDefault();
    e.stopPropagation();
  }
}

$( document ).ready(function() {
    var menus = $('.list-row');
    menuHeight = menus.first().height();
    menus.click(onClick);
    $(".tempInput").focus(resizeInput);
    $(".tempInput").blur(resizeInputDown);
});
