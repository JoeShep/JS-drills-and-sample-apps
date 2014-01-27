(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#btn').click(inceptionize);
    $('#number').keypress(submitWithEnter);
    $('#clear').click(clearScreen);
  }

  function submitWithEnter(){
    if (event.keyCode === 13) {
      inceptionize();
    }
  }

  function clearScreen(){
    //set a var to copy middle-box before it's deleted by detach method
    var $innerBox = $('#middle-box');
    $('.boxes').detach(); //makes middle-box disappear
    $('#container').append($innerBox);
    $('#number').focus();
  }

  function inceptionize(){
    var num = $('#number').val();
    var $middle = $('#middle-box');
    for(var i = 0; i < num; i++){
      var box = makeBox(i);
      $middle.wrap(box);
      $middle = $('#container > div');
    }
    $('#number').val('');
    $('#clear').removeClass('hidden');
  }

  function makeBox(x){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    var borderColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    var box = $('<div/>', {id:'box' + x, class:'boxes'}).css('border', '3px solid ' + borderColor);

    return box;
  }

})();
