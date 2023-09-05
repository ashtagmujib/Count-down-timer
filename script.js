const countdown = () => {

    
    const days = document.querySelector('.days')
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');



    
    const countDate = new Date('september 12,2023 00:00:00').getTime();
    const currentTime = new Date().getTime();
    const gap = countDate - currentTime;

    if (countDate === currentTime) {
        let dateReset = countDate
        dateReset = currentTime * 6;
    }


   

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const thatDay = Math.floor(gap / day);
    const thatHour = Math.floor((gap % day) / hour);
    const thatMinute = Math.floor((gap % hour) / minute);
    const thatsecond = Math.floor((gap % minute) / second);




    days.innerText = thatDay;
    hours.innerText = thatHour;
    minutes.innerText = thatMinute;
    seconds.innerText = thatsecond;


    if(days.innerText < 10) {
        days.innerText = `0${thatDay}`;
    }

    if(hours.innerText < 10) {
        hours.innerText = `0${thatHour}`;
    }

    if(minutes.innerText < 10) {
        minutes.innerText = `0${thatMinute}`;
    }

    if(seconds.innerText < 10) {
        seconds.innerText = `0${thatsecond}`;
    }


}


setInterval(countdown, 1000);




