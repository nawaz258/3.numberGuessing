let goal=Math.floor(Math.random()*100);


var resetbtn=document.querySelector("#resetbtn")
var time=document.querySelector("#time")
var input=document.querySelector(".input")
var submitbtn=document.querySelector("#submitbtn")
var result=document.querySelector("#resultvalue")
var score=document.querySelector("#score")
var value=document.querySelector("#value")



let count=0;
let number;

resetbtn.addEventListener("click",()=>{
    if(count==0){
        resetbtn.textContent="Reset";
        time.textContent="Choose a Number (1-100)";
        input.disabled=false;
        score.style.opacity=1;
        score.textContent="Moves Left: "
        value.textContent=20;
        count++;
    }
    else{
        resetbtn.textContent="Start";
        time.textContent="Click to  Start";
        input.disabled=true;
        input.value=" ";
        score.style.opacity=0;
        value.textContent=" ";
        resultvalue.textContent="Let's Go";
        count--;
    }
})
let noc=1;
submitbtn.addEventListener('click',()=>{
    
     
   if( resetbtn.textContent=="Reset"){
    ++noc;
     number=input.value;
     input.value=" ";
     if(noc<=20){ 
         value.textContent=20-noc+1;
         let delta=number-goal;
         if(number>100){
             time.textContent="Not Valid";
         }
         else if(delta==0){
             time.textContent="Congrats!!!";
             resultvalue.textContent='Right!!';
             score.style.opacity=1;
             score.textContent="Score:"
             value.textContent=100-noc+1;
         }
         else if(delta<5&delta>0){
             resultvalue.textContent='Little Low';
             time.textContent="Continue";
         }
         else if(delta<0&&delta>-5){
             resultvalue.textContent='Little High';
             time.textContent="Continue";
         }
         else if(delta>5){
             resultvalue.textContent='Aim Low';
             time.textContent="Continue";
         }
         else if(delta<-5){
             resultvalue.textContent='Aim High';
             time.textContent="Continue";
         }
         }
 
     else{
         score.textContent="Game";
         value.textContent="over";   
     }
   }
input.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        submitbtn.click(); // Trigger the submit button click
    }
});
    
   

    

})







