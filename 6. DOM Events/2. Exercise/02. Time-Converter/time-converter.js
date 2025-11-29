document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const dayForms = document.querySelector("form#days");
    const hoursForm = document.querySelector("form#hours");
    const minutesForm= document.querySelector("form#minutes");
    const secondsForm = document.querySelector("form#seconds");

    const inputDays = document.querySelector("input#days-input");
    const inputHours = document.querySelector("input#hours-input");
    const inputMinutes= document.querySelector("input#minutes-input");
    const inputSeconds = document.querySelector("input#seconds-input");

    const units = {
        days:1,
        hours:24, 
        minutes: 1440,
        seconds: 86400
    };

    function setValue(days){
        inputDays.value = (days*units.days).toFixed(2);
        inputHours.value = (days*units.hours).toFixed(2);
        inputMinutes.value = (days*units.minutes).toFixed(2);
        inputSeconds.value = (days*units.seconds).toFixed(2);
    }

    dayForms.addEventListener("submit", function(event){
        event.preventDefault();
        setValue(Number(inputDays.value));
    });

    hoursForm.addEventListener("submit", function(event){
        event.preventDefault();
        setValue(Number(inputHours.value)/units.hours);
    });

    minutesForm.addEventListener("submit", function(event){
        event.preventDefault();
        setValue(Number(inputMinutes.value)/units.minutes);
    });

    secondsForm.addEventListener("submit", function(event){
        event.preventDefault();
        setValue(Number(inputSeconds.value)/units.seconds);
    });

}

