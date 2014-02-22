(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.flipbox-front').click(flipIt);
    $('.play').click(shuffle);
  }

  function shuffle(){
    //debugger;
    if($('.content:has(img)').length){
      return;
    } else {
      //var numbers = _.shuffle([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]);
      var pics = [];
      pics[0] = ['media/robin.jpg', 0];
      pics[1] = ['media/barbie.jpg', 1];
      pics[2] = ['media/batman.jpg', 0];
      pics[3] = ['media/bert.jpg', 3];
      pics[4] = ['media/blues1.jpg', 4];
      pics[5] = ['media/blues2.jpg', 4];
      pics[6] = ['media/c3po.jpg', 5];
      pics[7] = ['media/r2d2.jpg', 5];
      pics[8] = ['media/ricky.jpg', 6];
      pics[9] = ['media/lucy.jpg', 6];
      pics[10]= ['media/laurel.jpg', 7];
      pics[11]= ['media/hardy.jpg', 7];
      pics[12]= ['media/cheech.jpg', 8];
      pics[13]= ['media/chong.jpg', 8];
      pics[14]= ['media/muppet1.jpg', 9];
      pics[15]= ['media/muppet2.jpg', 9];
      pics[16]= ['media/john.jpg', 2];
      pics[17]= ['media/paul.jpg', 2];
      pics[18]= ['media/ken.jpg', 1];
      pics[19]= ['media/ernie.jpg', 3];

      pics = _.shuffle(pics);

      $('.content').each(function(){
        $(this).append('<img data-id="' + pics[0][1] + '"src=' + pics[0][0] + '>');
        pics.shift();
      });
    }
  }

  function flipIt(){
    var $this = $(this);
    if($this.hasClass('matched') || $('.content').children().length === 0){
      return;
    }
    if(!$this.hasClass('flipped') && $('.flipped').length < 2){
      $this.flip({
        direction:'rl',
        speed: 200,
        color: 'black',
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
    var $pic1 = $('.flipped:eq(0)');
    var $pic2 = $('.flipped:eq(1)');
    if( $pic1.find('img').data('id') === $pic2.find('img').data('id')){
      $('.flipped').children().css('border','5px solid green');
      $('.flipped').toggleClass('matched flipped');
      if($('.matched').length === 20){
        setTimeout(function(){
          alert('Great job!');
        },500);
      }
    } else {
      $('.flipped').animate({'background-color':'red'},100);
      setTimeout(function(){
        $('.flipped').revertFlip().css('background','black').removeClass('flipped');
      },800);
    }
  }
//$('.tile:contains(1)').css("background-color", "red");

})();

