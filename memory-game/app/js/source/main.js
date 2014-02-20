(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.flipbox-front').click(flipIt);
    $('.play').click(shuffle);
  }

  function shuffle(){
    var numbers = _.shuffle([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]);

    $('.content').each(function(){
      $(this).append('<p>' + numbers[0] + '</p>');
      numbers.shift();
    });
  }

  function flipIt(){
    //debugger;
    var $this = $(this);
    if($this.hasClass('matched')){
      return;
    }
    if(!$this.hasClass('flipped')){
      $this.flip({
        direction:'rl',
        speed: 200,
        onEnd: function(){
          if($('.flipped:eq(1)').length){
            checkMatch();
          }
        }
      }).addClass('flipped');
      $this.children('.content').removeClass('hidden');
    } else {
      $this.removeClass('flipped');
      $this.children('.content').addClass('hidden');
      $this.revertFlip();
    }
  }
  
  function checkMatch(){
    if($('.flipped:eq(1)').text() === $('.flipped:eq(0)').text()){
      $('.flipped').css('border','4px solid green').toggleClass('flipped matched');
      if($('.matched').length === 20){
        setTimeout(function(){
          alert('Great job!');
        },500);
      }
    } else {
      $('.flipped').css('border','4px solid red');
      setTimeout(function(){
        $('.flipped').revertFlip().css('border','none').removeClass('flipped');
      },800);
    }
  }
//$('.tile:contains(1)').css("background-color", "red");

})();

