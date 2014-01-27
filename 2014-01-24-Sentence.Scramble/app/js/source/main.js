(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('.button').click(chopSentence);
    $('#word-list').on('click', '.word-box', function(){
      makeSentence($(this));
    });
  }

  function chopSentence(){
    var $sentence = $('#sentence').val().split(' ');
    for (var i = 0; i < $sentence.length; i++){
      var wordBox = createDiv($sentence[i], i);
      $('#word-list').append(wordBox);
    }
    $('#sentence').empty();
  }

  function createDiv(element, index){
    var $wordBox = $('<div/>', {id: 'box' + index});
    $wordBox.addClass('word-box').append(element);
    return $wordBox;
  }

  function makeSentence(word) {
    word.clone().attr('id', word.attr('id') + 'clone').appendTo($('#sentence-box'));
  }



})();
