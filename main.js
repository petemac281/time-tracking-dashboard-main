let timeData;

async function populate() {

    const requestURL = "./data.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    timeData = await response.json();

}
    populate();


  

document.getElementById("daily").addEventListener("click", displayDaily);

document.getElementById("weekly").addEventListener("click", displayWeekly);

document.getElementById("monthly").addEventListener("click", displayMonthly);



function displayDaily () {

    document.querySelector("#daily").classList.add("selected");
    document.querySelector("#weekly").classList.remove("selected");
    document.querySelector("#monthly").classList.remove("selected");

    
    function populateValues() {

        var visibleWork = document.querySelector(".work");
        var visibleWorkPrev = document.querySelector(".workPrev");
        var visiblePlay = document.querySelector(".play");
        var visiblePlayPrev = document.querySelector(".playPrev");
        var visibleStudy = document.querySelector(".study");
        var visibleStudyPrev = document.querySelector(".studyPrev");
        var visibleExercise = document.querySelector(".exercise");
        var visibleExercisePrev = document.querySelector(".exercisePrev");
        var visibleSocial = document.querySelector(".social");
        var visibleSocialPrev = document.querySelector(".socialPrev");
        var visibleSelf = document.querySelector(".selfCare");
        var visibleSelfPrev = document.querySelector(".selfCarePrev");
        visibleWork.textContent = timeData[0].timeframes.daily.current;
        visibleWorkPrev.textContent = timeData[0].timeframes.daily.previous;
        visiblePlay.textContent = timeData[1].timeframes.daily.current;
        visiblePlayPrev.textContent = timeData[1].timeframes.daily.previous;
        visibleStudy.textContent = timeData[2].timeframes.daily.current;
        visibleStudyPrev.textContent = timeData[2].timeframes.daily.previous;
        visibleExercise.textContent = timeData[3].timeframes.daily.current;
        visibleExercisePrev.textContent = timeData[3].timeframes.daily.previous;
        visibleSocial.textContent = timeData[4].timeframes.daily.current;
        visibleSocialPrev.textContent = timeData[4].timeframes.daily.previous;
        visibleSelf.textContent = timeData[5].timeframes.daily.current;
        visibleSelfPrev.textContent = timeData[5].timeframes.daily.previous;      
    }          
populateValues();
};



function displayWeekly () {

    document.querySelector("#daily").classList.remove("selected");
    document.querySelector("#weekly").classList.add("selected");
    document.querySelector("#monthly").classList.remove("selected");

    
    
    function populateValues() {

        var visibleWork = document.querySelector(".work");
        var visibleWorkPrev = document.querySelector(".workPrev");
        var visiblePlay = document.querySelector(".play");
        var visiblePlayPrev = document.querySelector(".playPrev");
        var visibleStudy = document.querySelector(".study");
        var visibleStudyPrev = document.querySelector(".studyPrev");
        var visibleExercise = document.querySelector(".exercise");
        var visibleExercisePrev = document.querySelector(".exercisePrev");
        var visibleSocial = document.querySelector(".social");
        var visibleSocialPrev = document.querySelector(".socialPrev");
        var visibleSelf = document.querySelector(".selfCare");
        var visibleSelfPrev = document.querySelector(".selfCarePrev");
        visibleWork.textContent = timeData[0].timeframes.weekly.current;
        visibleWorkPrev.textContent = timeData[0].timeframes.weekly.previous;
        visiblePlay.textContent = timeData[1].timeframes.weekly.current;
        visiblePlayPrev.textContent = timeData[1].timeframes.weekly.previous;
        visibleStudy.textContent = timeData[2].timeframes.weekly.current;
        visibleStudyPrev.textContent = timeData[2].timeframes.weekly.previous;
        visibleExercise.textContent = timeData[3].timeframes.weekly.current;
        visibleExercisePrev.textContent = timeData[3].timeframes.weekly.previous;
        visibleSocial.textContent = timeData[4].timeframes.weekly.current;
        visibleSocialPrev.textContent = timeData[4].timeframes.weekly.previous;
        visibleSelf.textContent = timeData[5].timeframes.weekly.current;
        visibleSelfPrev.textContent = timeData[5].timeframes.weekly.previous;
    }          
populateValues();
};


function displayMonthly () {

    document.querySelector("#daily").classList.remove("selected");
    document.querySelector("#weekly").classList.remove("selected");
    document.querySelector("#monthly").classList.add("selected");

    function populateValues() {

        var visibleWork = document.querySelector(".work");
        var visibleWorkPrev = document.querySelector(".workPrev");
        var visiblePlay = document.querySelector(".play");
        var visiblePlayPrev = document.querySelector(".playPrev");
        var visibleStudy = document.querySelector(".study");
        var visibleStudyPrev = document.querySelector(".studyPrev");
        var visibleExercise = document.querySelector(".exercise");
        var visibleExercisePrev = document.querySelector(".exercisePrev");
        var visibleSocial = document.querySelector(".social");
        var visibleSocialPrev = document.querySelector(".socialPrev");
        var visibleSelf = document.querySelector(".selfCare");
        var visibleSelfPrev = document.querySelector(".selfCarePrev");
        visibleWork.textContent = timeData[0].timeframes.monthly.current;
        visibleWorkPrev.textContent = timeData[0].timeframes.monthly.previous;
        visiblePlay.textContent = timeData[1].timeframes.monthly.current;
        visiblePlayPrev.textContent = timeData[1].timeframes.monthly.previous;
        visibleStudy.textContent = timeData[2].timeframes.monthly.current;
        visibleStudyPrev.textContent = timeData[2].timeframes.monthly.previous;
        visibleExercise.textContent = timeData[3].timeframes.monthly.current;
        visibleExercisePrev.textContent = timeData[3].timeframes.monthly.previous;
        visibleSocial.textContent = timeData[4].timeframes.monthly.current;
        visibleSocialPrev.textContent = timeData[4].timeframes.monthly.previous;
        visibleSelf.textContent = timeData[5].timeframes.monthly.current;
        visibleSelfPrev.textContent = timeData[5].timeframes.monthly.previous;  
    }          
populateValues();
}