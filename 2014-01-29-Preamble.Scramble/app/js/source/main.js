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
      if (val.length > 1){
        return 0 !== val.length  % 2;
      }
    });

    var noVowelWords = [];
    _.map(odds, function(word){
      noVowelWords.push(word.replace(/[aeiou]/gi,''));
    });

    _.pull(noVowelWords, '');

    doTheMath(evens, odds, pigWords, noVowelWords);
   // displayWords(pigWords, noVowelWords);
  }

  function doTheMath(evens, odds, pigWords, noVowelWords){
    var sums = [];
    var products = [];
    for(var i = 0; i < evens.length; i ++){
      var sum = 0;
      for(var j = 1; j <= evens[i].length; j++){
        sum = sum + j;
      }
      sums.push(sum);
    }

    for(var x = 0; x < odds.length; x++){
      var product = 1;
      for(var y = 1; y <= odds[x].length; y++){
        product = product * y;
      }
      products.push(product);
    }
    //products = _.without(products, 1);
    displayWords(sums, products, pigWords, noVowelWords, evens, odds);
  }

  function displayWords(sums, products, pigWords, noVowelWords, evens, odds){
    var timer1 = setInterval(function() {
      if(pigWords.length) {
        $('#evens-list').append('<li><span class="evenWords bothWords"><a href="https://www.google.com/#q=' + evens[0]  + '">' + pigWords[0].toLowerCase() + ' ' + '</span><span class="sums">' + sums[0] + '</a></span></li>');
        pigWords.shift();
        sums.shift();
        evens.shift();
      } else {
        clearInterval(timer1);
      }
    }, 1000);

    var timer2 = setInterval(function() {
      if(noVowelWords.length) {
        $('#odds-list').append('<li><span class="oddWords bothWords"><a href="https://www.google.com/#q=' + odds[0] + '">' + noVowelWords[0].toUpperCase() + ' ' + '</span><span class="products">' + products[0] + '</a></span></li>');
        noVowelWords.shift();
        products.shift();
        odds.shift();
      } else {
        clearInterval(timer2);
      }
    }, 1000);
  }

})();

