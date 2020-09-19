//Create a function “showTime”.

function showTime() {

    //Constructors are functions that create new objects.
    //Create an instance of the Date object.
    //The new operator is used when calling a constructor.
    //The only correct way to instantiate a new Date object is by using the new operator. 
    //If you simply call the Date object directly, such as now = Date(),
    //the returned value is a string rather than a Date object.
    //Date instance that represents a single moment in time in a platform-independent format.
    let time = new Date();

    // Using the methods of Date object get “hours”, “minute” and “seconds”.
    //The getHours() method returns the hour for the specified date, according to local time.
    let hour = time.getHours();

    //The getMinutes() method returns the minutes in the specified date according to local time.
    let min = time.getMinutes();

    //The getSeconds() method returns the seconds in the specified date according to local time.
    let sec = time.getSeconds();

    let am_pm = "AM";

    /*Set AM/PM depending on the hour value. 
    The Date object works on 24-hour format so
    we change hour back to 1 when it get’s larger than 12. 
    The AM/PM also changes according to that.*/

    if(hour > 12){
        hour -= 12;
        am_pm = "PM";
    }

    if(hour == 0){
        hour = 12;
        am_pm = "AM";
    }

    /*Now make a string using the same HH:MM:SS 
    format changing the hour, minute, and second value
    with the values, we get from Date object methods.*/

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    //Now replace the string variable in the “div” using innerHTML property.
    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    /*To call the function every second use setInterval() method
     and set time-interval as 1000ms which is equal to 1s.*/

     setInterval(showTime,1000);

     /* Now call the function at the end to start function 
     at exact reloading/rendering time as setInterval() 
     will call first after 1s of rendering.*/

     document.getElementById("clock")
     .innerHTML = currentTime;
}
showTime();