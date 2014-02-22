//http://projecteuler.net/problems
(function(){

  // 1) Find the sum of all the multiples of 3 or 5 below 1000.
  function euler1(){
    var numbers = [];
    var total = 0;
    for(var i = 0; i < 1000; i++){
      if(i % 3 === 0 || i % 5 === 0)
        numbers.push(i);
    }
    numbers.forEach(function(number){
      total = total + number;
    });
    console.log(total);
  }
  euler1();

  // 2) By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
  function fibonacci1(){
    var sum = last = nextToLast = 0;
    var numbers = [1,2];
    while(last <= 4000000){
      last = numbers[numbers.length -1];
      nextToLast = numbers[numbers.length -2];
      sum = last + nextToLast;
      numbers.push(sum);
    }
    numbers.pop(); 
    console.log(addEvenElements(numbers));
  }
  fibonacci1();

  function addEvenElements(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 === 0)
        sum = sum + array[i];
    }
    return sum;
  }

  // 3) What is the largest prime factor of the number 600851475143?
  function calcPrimeFactors(number){
   // divide by each prime # until you run out
   var primeNums = [];
   if(number >= 3)
    primeNums.push(1,2)
   var x = 1;
   for(i=0; i < number; i++){
    if(i !== x && i !== 1)
      if(i % 2 !== 0)
        primeNums.push(i);
    x++;
   }
   console.log(primeNums);
  }
  calcPrimeFactors(13195);

  //Coderbyte Challenge Questions

  function firstReverse(str) { 
    var string = '"'+ str.split('').reverse().join('') + '"';
    return string;       
  }
  firstReverse("I Love Code");

  //*****************************
  function firstFactorial(num) { 
    var result=1;
    for(var i=1; i<=num; i++){
      result=result * i
    } 
    console.log(result);        
  }
  firstFactorial(4);

  //*****************************
  function longestWord(sen) { 
    var stripped = sen.replace(/[^a-zA-Z0-9-]/g, ' ');
    var words = stripped.split(' ');
    var longest = words[0];
    for( var i = 1; i < words.length; i++){
      //debugger;
      if(longest.length < words[i].length)
        longest = words[i]
    }         
    console.log(longest)
  }
  longestWord("I love to eat$&!!! monkeys");

  //******************************
  function LetterChanges(str) { 
    debugger;
    str = str.toLowerCase();
    var newStr = '';
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(var i=0; i<str.length; i++){
      if(/^[a-zA-Z]+$/.test(str[i])){
        var letter = alphabet[alphabet.indexOf(str[i]) + 1];
        if(letter === "a"){
        letter = ' ';
        } else { letter = letter}
      } else {
       letter = str[i];
       }
      newStr += letter;
    }
    newStr = newStr.replace(/[aeiou]/g, function(vowel){
        return vowel.toUpperCase();
    });
    console.log(newStr); 
  }
  LetterChanges("Mister Jones8");

}());




