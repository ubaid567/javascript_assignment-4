//chapter#9 USER INPUT & CONDITIONAL USER INPUT & CONDITIONAL STATEMENT


//question#1
//var city =prompt("enter your city name")
//if(city=="karachi"){
//  document.write("<h1>wellcome to city of the lights</h1>")
//}

//question#2
//var gender=prompt("enter your gender")
//if(gender=="male"){ document.write('<centre><h1>"Good Morning Sir"</h1></centre>')}
//if(gender=="female"){ document.write('<centre><h1>"Good Morning Mam"</h1></centre>')}


//question#3
/*var color1=prompt("enter the first traffic signal color " )
var color2=prompt("enter the second traffic signal color " )
var color3=prompt("enter the third traffic signal color " )
if(color1=="red"){
    document.write("<h1> red   ;   must stop</h1>")
}
if(color1=="green"){
    document.write("<h1> green   ;   move now</h1>")
}
if(color1=="yellow"){
    document.write("<h1> yellow   ;   ready to move</h1>")
}


if(color2=="red"){
    document.write("<h1> red   ;   must stop</h1>")
}
if(color2=="green"){
    document.write("<h1> green   ;   move now</h1>")
}
if(color2=="yellow"){
    document.write("<h1> yellow   ;   ready to move</h1>")
}


if(color3=="red"){
    document.write("<h1> red   ;   must stop</h1>")
}
if(color3=="green"){
    document.write("<h1> green   ;   move now</h1>")
}
if(color3=="yellow"){
    document.write("<h1> yellow   ;   ready to move</h1>")
}*/


//question#4

/*var fuell = prompt("enter remmaing fuel in car (must enter in liters)")
if(fuell < "0.25"){
    document.write('<h1>“Please refill the fuel in your car”</h1>')
}*/

//question#5
//condition a
 /*var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}*/
//condittion a is true its show alert "given condition for varriable a is true"

//condition  b

/*var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}*/

// given condition is not true

//condition c

/*var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");*/
//alert("condition 2 & 3 true")

//condition d

/*var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}*/

//condition "d" is write


//condition e

/*if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }*/
    //true is answer


 //condition f   

/* if("car" < "cat"){
    alert("car is smaller than cat");
    }*/

   // condition is true

   
  
 //question #6

/* var subject1 = 80
 var subject2= 76
 var subject3= 68
 var totalObtainedMarks= subject1+subject2+subject3
 var totalMarks= 300
 var percentage=totalObtainedMarks*100/totalMarks

 var grade=""
 if(percentage>="80"){
    grade="A-one"
 }
 else if(percentage>=70){
    grade="A"
 }
 else if(percentage>=60){
    grade="B"
 }
 else{grade="Fail"}

 var remarks=""
 if(grade==="A-one"){
    remarks="Excellent"
 }
 else if(grade==="A"){
    remarks="Good"
 }
 else if(grade==="B"){
    remarks="You need to improve"
 }
 else{remarks="Sorry"}





 document.write( "<h1>Mark Sheet</h1>")
 document.write("<h2> Total Marks ="+totalMarks+"</h2>")
 document.write("<h2> Marks Obtained ="+totalObtainedMarks+"</h2>")
 document.write("<h2> Percentage ="+percentage+"</h2>")
 document.write("<h2> Grade ="+grade+"</h2>")
 document.write("<h2> Remarks ="+remarks+"</h2>")*/

 //question#7

/* var game=7
 var guess=prompt("guess a any number 1 to 10")
if(game==guess){
    alert("bingo! correct answer")
}
else{
    alert("close enough to the correct answer")
}*/

//question#8

/*var number=prompt("enter any number")
if(number%3===0){
    alert( "The  "+number+" is divisible by 3")
}
else{
    alert("The "+number+" is not divisible by 3")
}*/

//question#9

/*var number=prompt("enter any number")
if (number%2===0){
    alert("Even number")
}
else{
    alert("odd number")
}*/

//question#10

/*var temp=prompt("entre a today temprature")
if(temp>40){
    alert('“It is too hot outside.”')
} else if(temp>30){
    alert('“The Weather today is Normal.”')
}else if(temp>20){
    alert('“Today’s Weather is cool.”')
}else{
    alert('“OMG! Today’s weather is so Cool.”')
}*/

//question#11

/*var firstnum =prompt("enter a first number")
var secondnum =prompt("enter a second number")
var opration =prompt("enter a opration")
if(opration=="-"){

    alert(firstnum-secondnum)
}else if(opration=="*"){
    alert(firstnum*secondnum)
}
else if(opration=="/"){
    alert(firstnum/secondnum)
}
else if(opration=="+"){
    alert(firstnum+secondnum)
}
else if(opration=="%"){
    alert(firstnum/secondnum*100)
}*/

//CHAPTER 12-13 "IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS"
//QUESTION#1

/*var the =prompt("enter any number or letter ")
if(the==="number"){
    alert("the input is a number")
} else if(the>='A'&& the<='Z'){
    alert("the input is upper case")
} else if(the>='a'&& the<='z'){
    alert("the input is lower case")
} else{
    alert("the input is a number")
}*/



//QUESTION#2
/*var num1=prompt("enter a number")
var num2=prompt("enter a number")
if(num1>num2){
    alert("the larger number is "+num1)
}else if(num1<num2){
    alert("the larger number is "+num2)
} else{ alert("both numbers are equals")}*/

//QUESTION#3
/*var num1=prompt("enter any number")
if(num1>0){
    alert("the input is positive number")
} else if(num1<0){
    alert("the input is nagative number")
}
else{
    alert("the input is zero")
}*/

//question#4

/*
var vowel=prompt("input a number")
if(vowel==="a"|| vowel==="e"|| vowel==="o"|| vowel==="i"|| vowel==="u"
    || vowel==="A"|| vowel==="U"|| vowel==="O"|| vowel==="I"|| vowel==="E"){
        alert("true")
    }else{alert("false")}*/


   // QUESTION#5

   /*var correctPassword="your dad"
 var userPassword=prompt("please entre your password")
 if(correctPassword===userPassword){
    alert('“Correct! The password you entered matches the original password”')
 }else{alert(" incorect password")}*/


// question#6

/*var greeting;
var hour = prompt("entre the current hour")
if (hour < 18) {
alert( "Good day")}
else
{alert ( "Good evening")
}*/

//question#7

// ask the user to enter the time in 24-hour format
let time = prompt("Enter the time in 24-hour format (e.g. 1900 for 7 PM):");

// check the input and output the equivalent time in 12-hour format
if (time >= 0000 && time < 1200) {
  console.log("The time in 12-hour format is: " + (time.slice(0, 2) % 12) + " AM");
} else if (time >= 1200 && time < 1300) {
  console.log("The time in 12-hour format is: " + (time.slice(0, 2) % 12) + " PM");
} else if (time >= 1300 && time < 2400) {
  console.log("The time in 12-hour format is: " + (time.slice(0, 2) % 12) + " PM");
} else {
  console.log("Invalid input. Please enter a valid 24-hour time format.");
}


