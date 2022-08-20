//************Vowels code**********//

var vow = prompt("check in this sentence vowel word")
  var vowelWord = "AEIOUaeiou";
  var cou = 0;
  
  for(var x = 0; x < vow.length ; x++)
  {
    if (vowelWord.indexOf(vow[x]) !== -1)
    {
      cou += 1;
    }
  
  }
console.log(cou);


//************Value reverse***********//

var as = prompt("write a number");
    var asa = as.toString().split("");
    var ree = asa.reverse().join(""); 
    console.log(ree);

//**********Uper Case***************/

var  abc = prompt("write a string");
var bcd = abc.split(" ");
for (var i = 0; i < bcd.length; i++) {
    bcd[i] = bcd[i].charAt(0).toUpperCase() + bcd[i].slice(1);
}
var joi1 = bcd.join(" ");
console.log(joi1);


//************ Sequence**************/

function sequence() {
    var abc = prompt("write a letter");
    var bcd = abc.split("").sort().join("");
    return bcd;
}
document.write(sequence());


//***********Check Prime Number********/

function checkPrimeNum(number){
    if (number < 2) {
        console.log(number + " number is not prime number");
    }
    for(var i = 2 ; i < number ; i++){
        if (number % i === 0) {
            console.log(number + " number not prime number");
            return false;
        }
    }
    console.log(number + " number is prime number");
    return true;
    //console.log(num + " is prime number");
  }
  
  checkPrimeNum(+prompt("enter number to check it is prime or not : "));


  //****************Palindrome**********/

  var abc = prompt("write a corret palindrome word check ");
var bcd = abc.length;
for(var i = 0 ; i <bcd/2 ; i++){
    if(abc[i] !== abc[bcd -1 -i]){
        console.log("Not a palindrome");
        break;
    }else
        console.log(" Plaindrome World")
    break;
}

// ****************Lowest Gratest array********//

function array_Sort(arrayNo){
    array_value = arrayNo.sort();
    console.log(array_value);
    console.log(array_value[1] , (array_value.length-1));
    
    }


    //***********Combinaation Value */

    function combination(abc){
        var abc = prompt("write a value and combination");
        var acd = new Array();
        for (var i = 0 ; i < abc.length ; i++){
            for(var j = i + 1 ; j < abc.length +1 ; j++ ){
                acd.push(abc.slice(i , j));
            }
        }
        return acd;
    }
    document.write(combination());


    //******check data type  */

    function abc(arg){

        console.log("this is "+ typeof(arg))
    }
    
    //calling function with argument 
    abc(true);


    //******* Biggest value  */

    var ques = prompt("write a letter")
abcd = ques.match(/[a-zA-Z0-9]+/gi);
let largest = "";
for(let i = 0; i < abcd.length; i++){
    if(abcd[i].length > largest.length){
    largest = abcd[i]}
}
console.log(largest);