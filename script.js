const form = document.querySelector("form");
let guess_number = Math.ceil((Math.random()*(99))+1)
console.log(guess_number)
let count = 10;
let prevoius_number = "";
let show = ""
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let  data = document.querySelector("#number");
    //CHECKING BLANK SPACES 
    if (data.value.trim()===""){
        data.value = ""
        data.placeholder = "Please Enter some value!"
    }
    //CHECKING VALUES SHOULD NUMBERS NOT CHARACTER
    else if (isNaN(data.value.trim())){
        data.value =""
        data.placeholder = "Please Enter integer values!"        
    }
    //CHECKING VALUES SHOULE BE GRATER  THAN 0
    else if (parseInt((data.value).trim())<=0){
        data.value = ""
        data.placeholder = "Please Enter integer values greater than 0";
    }
    //CHECKING VALUES SHOULE BE LESS  THAN 100
    else if (parseInt((data.value).trim())>100){
        data.value = ""
        data.placeholder = "Please Enter integer values less than 100";
    }
    // IF THE VALUE MATCHES 
    else if(parseInt(data.value.trim())===guess_number){
        document.querySelector("#last_guess").innerHTML = ``
        document.querySelector("#Guess").innerHTML = ``
        document.querySelector("#result").innerHTML = "You have made the right guess"  ;
        document.querySelector("#result").style.backgroundColor = "#4CAF50";
        document.querySelector("#result").style.border = "0px solid #4CAF50";


    }
    // IF VALUES DONT MATCH
    else if( parseInt((data.value).trim)!== guess_number){
        prevoius_number = data.value;
        data.value = ""
        count-- // DECREASING COUNTER EVERY TIME YOU DO WRONG GUESS AT INTEGERS ONLY
        if (count>0){ // CHECKING COUNT 
        document.querySelector("#last_guess").innerHTML = `Your prevoius guess number was : ${prevoius_number}`
        document.querySelector("#Guess").innerHTML = `You have now : ${count} chance `
        document.querySelector("#result").innerHTML = "You have made the wrong guess" }
        else if ( count == 0){ // IF COUNT = 0 : TELL USER IT HIS/HER LAST TRY
        document.querySelector("#last_guess").innerHTML = `Your prevoius guess number was : ${prevoius_number}`
        document.querySelector("#Guess").innerHTML = `This your last chance now! `
        document.querySelector("#result").innerHTML = "You have made the wrong guess" 
        } 
        //MISSED ALL THE CHANCES
        // AFTER MISSING ALL THE CHANCES TELL THE USER TO REFEREH
        else {
        data.placeholder = "You have completed your all chances!"
        document.querySelector("#last_guess").innerHTML = ``
        document.querySelector("#Guess").innerHTML = ` `
        document.querySelector("#result").innerHTML = `` }
        }
    }
//REFRESH BUTTON
)
document.getElementById("restart").addEventListener("click",()=>{
    window.location.reload()
})