$("#currentDay").text(moment().format("dddd, MMMM Do"));

var timeLogContainer = $('.container');
var currentHour = parseInt(moment().format("k"));

var timeLogTime;
// timeLogHolder.append(timeLogRow); 
for (const timeRow of timeLogContainer.children()) {
    // the time Log Time and set it to 24 hour format
    timeLogTime = parseInt($(timeRow).children(".hour").text().split(" ")[0]);
    // given the current time, set each description box to either past, present or future
    if(timeLogTime < 9)
        timeLogTime = timeLogTime + 12;
    if(timeLogTime < currentHour)
        $(timeRow).children(".description").addClass("past");
    else if( timeLogTime == currentHour)
        $(timeRow).children(".description").addClass("present");
    else 
        $(timeRow).children(".description").addClass("future");
}

// for each text area, set the val() to whatever is pulled from storage
var day = moment().format("D-M-YYYY");
var stor;
if(stor = localStorage.getItem(day))
{
    stor = JSON.parse(stor);
    // for each element in stor
    // find the associated textarea using jquery and data-time
    //and set the val() to the amount;
    for(key in stor) {
        $("div[data-time='" + key + "'").siblings('textarea').val(stor[key]);
    }
}

//create an event listener at each button
// that takes the data in text area and stores it
// in local storage
$("button").on("click", function() {  
    if(stor = localStorage.getItem(day))
        stor = JSON.parse(stor);
    else
        stor = {};
    var section = $(this).siblings("div").text();
    stor[section] = $(this).siblings("textarea").val()
    localStorage.setItem(day, JSON.stringify(stor));
})


