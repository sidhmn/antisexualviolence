/* .js files add interaction to your website */

var factList = [
  "An American is sexually assulted every 73 seconds.",/*0*/
  "Ages 12-34 are the years that one is most vunerable to sexual assault.",/*1*/
  "According to national statistics, at least 45% of domestic violence survivors report their abusers of being sexually violent.",/*2*/
  "Nonbinary people and other members of the LGBTQ+ community are more likely to be sexually assaulted. This inflation is caused by the combination of homophobia and transphobia. "];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


