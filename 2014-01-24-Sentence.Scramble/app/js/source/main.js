(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.button').click(chopSentence);
  }

  function chopSentence(){
    var $sentence = $('#sentence').val().split(' ');
    for (var i = 0; i < $sentence.length; i++){
      var wordBox = createDiv($sentence[i]);
      $('#word-list').append(wordBox);
    }
    $('#sentence').empty();
  }

  function createDiv(element){
    var $wordBox = $('<div/>');
    $wordBox.addClass('word-box').append(element);
    return $wordBox;
  }

})();
