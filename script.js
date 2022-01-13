/*************************************
 ***  Made By Yohay Hackam         ***
 ***  mail: Yoman_321@hotmail.com  ***
 ***  054-2616626                  ***
 *************************************
 Script File - for I/o basic interface demo HTML - JavaScript
 
 myFunction(input) Called by `MyButton` on front HTML file,
`input` is the user input value from `myInput` field on HTML file

Exemple - MyHomeWork(input) return input value as Jason string (i.e {Key:value} ) 
you can replace MyHomeWork(input) with your function.
*/

function myFunction(input)
{
 document.getElementById("myOutput").innerHTML =MyHomeWork(input); //Return value to be displayed inside paragraph <P id='myOutput'>  
}

function MyHomeWork(input)  //Replace with your Homework assiment
{
return `Value: ${input}` //Exemple retrn input as Jason string
}