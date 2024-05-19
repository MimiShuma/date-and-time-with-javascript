let dateTime = {
    getWeekdayOfToday: function (weekdayId) {
        const today = new Date();
        const weekdayNum = today.getDay();

        function getWeekday(weekdayNum) {
            let arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            if (weekdayNum >= 0 && weekdayNum <= 6) {
                return arrayOfWeekdays[weekdayNum];
            } else {
                return "Invalid weekday number";
            }
        }

        let weekday = getWeekday(weekdayNum);

        const displayer = document.getElementById(weekdayId);
        while (displayer.firstChild) {
            displayer.removeChild(displayer.firstChild)
        }
        const txtNode = document.createTextNode(weekday);
        displayer.appendChild(txtNode);
    },

    getCurrentTimeOfToday: function (timeId) {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let period = "am";
        if (hours >= 12 && hours < 24) {
            if (hours === 12) {
                period = "pm";
            }
            else {
                hours = hours - 12;
                period = "pm";
            }
        }
        else {
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours; // if the condition is true then 0 will be added and if false then hours will be as it is
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        let currentTime = hours + " " + period + " : " + minutes + " : " + seconds
        const timeDisplayer = document.getElementById(timeId);
        while (timeDisplayer.firstChild) {
            timeDisplayer.removeChild(timeDisplayer.firstChild);
        }
        timeDisplayer.innerHTML = currentTime;
    }
}

dateTime.getWeekdayOfToday('weekday');
dateTime.getCurrentTimeOfToday('timeSpan');
