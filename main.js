function calcAge(){

    const YEAR = 31536000000;
    const today = new Date();
    console.log(today);

    const birthday = new Date(document.getElementById("dateInput").value);
    console.log(birthday);

    if(birthday == "Invalid Date" || birthday > today){
        alert("Error there is something wrong try again!")
    

    }else{
        const ageInYears = (today-birthday) / YEAR;
        document.getElementById("years").innerHTML = ageInYears.toFixed(1);

        const ageInMonths = ageInYears * 12;
        document.getElementById("months").innerHTML = ageInMonths.toFixed(0);

        const ageInWeeks = ageInYears * 52;
        document.getElementById("weeks").innerHTML = ageInWeeks.toFixed(0);

        const ageInDays = ageInYears * 365;
        document.getElementById("days").innerHTML = ageInDays.toFixed(0);
        
        const ageInHours = ageInDays * 24;
        document.getElementById("hours").innerHTML = ageInHours.toFixed(0);

        const ageInMinuts = ageInHours * 60;
        document.getElementById("minutes").innerHTML = ageInMinuts.toFixed(0);

        const ageInSeconds = ageInMinuts * 60;
        document.getElementById("seconds").innerHTML = ageInSeconds.toFixed(0);




        document.getElementById('results').style.display = 'block';
    }




}
