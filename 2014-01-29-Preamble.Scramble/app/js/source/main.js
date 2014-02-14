(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('.button').click(scrambleIt);
    $('textarea').val(text);
  }

  var text = 'We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.';

  function scrambleIt(){
    var words = $('textarea').val();
    words = words.replace(/,/g,'').replace(/\./g,'').split(' ');
    var evens = words.filter(function(val) {
      return 0 === val.length  % 2;
    });

    var pigWords = [];
    _.map(evens, function(word){
      var pigWord = word.substring(1) + word.substring(0,1);
      pigWords.push( pigWord + 'ay');
    });

    var odds = words.filter(function(val) {
      return 0 !== val.length  % 2;
    });

    var noVowelWords = [];
    _.map(odds, function(word){
      noVowelWords.push(word.replace(/[aeiou]/gi,''));
    });

    _.pull(noVowelWords, '');

    displayWords(pigWords, noVowelWords);
  }

  function displayWords(pigWords, noVowelWords){
    var timer1 = setInterval(function() {
      if(pigWords.length) {
        $('#evens-list').append('<li><span>' + pigWords[0].toLowerCase() + '</span></li>');
        pigWords.shift();
      } else {
        clearInterval(timer1);
      }
    }, 1000);

    var timer2 = setInterval(function() {
      if(noVowelWords.length) {
        $('#odds-list').append('<li><span>' + noVowelWords[0].toUpperCase() + '</span></li>');
        noVowelWords.shift();
      } else {
        clearInterval(timer2);
      }
    }, 1000);
  }

})();

