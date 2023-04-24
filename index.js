const btnEl = document.querySelector('#btn')
const birthdayEl = document.querySelector('#birthday')
const resultEl = document.querySelector('#result')


function calculateAge(){
    const birthdayValue = birthdayEl.value;
    const date = new Date();
    if(birthdayValue === ""){
        //alert('Please Enter Your Age')
        resultEl.textContent = `please Enter Your Birthdate`
        resultEl.style.fontSize  = '20px'
        resultEl.style.color = '#fa4646'

     } //else if(birthdayValue === date.getFullYear()){
    //     console.log("Wrong Birthdate"); }
    else{
        const age = getAge(birthdayValue)
         resultEl.textContent = `your age is ${age}  ${age>1? "years" : "year"} Old`
         resultEl.style.fontSize  = '24px'
        resultEl.style.color = '#000'
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    let day = currentDate.getDay() - birthdayDate.getDay();
    if(currentDate.getFullYear()-birthdayDate.getFullYear() && currentDate.getMonth() - birthdayDate.getMonth() && currentDate.getDay() - birthdayDate.getDay()){
        return age --;
    } 
    return age;
}

btnEl.addEventListener('click', (calculateAge));

