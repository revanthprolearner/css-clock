const secs_hand = document.querySelector('.seconds_hand');
const mins_hand = document.querySelector('.minutes_hand');
const hrs_hand = document.querySelector('.hours_hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secs_degs = ((seconds/60)*360)+90;
    console.log(secs_hand);
}
setDate();