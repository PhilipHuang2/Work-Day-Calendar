// $(document).ready(function () {
//     console.log(moment().format("dddd, MMMM Do YYYY"));
// })
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var timeLogContainer = $('.container');
var currentHour = parseInt(moment().format("k"));
var timeLogTime;
console.log(currentHour);
// timeLogHolder.append(timeLogRow); 
for (const timeRow of timeLogContainer.children()) {
    // the time Log Time and set it to 24 hour format
    timeLogTime = parseInt($(timeRow).children(".hour").text().split(" ")[0]);
    // given the current time, set each description box to either past, present or future
    if(timeLogTime < 9)
        timeLogTime = timeLogTime + 12;
    console.log(timeLogTime);
    if(timeLogTime < currentHour)
        $(timeRow).children(".description").addClass("past");
    else if( timeLogTime == currentHour)
        $(timeRow).children(".description").addClass("present");
    else 
        $(timeRow).children(".description").addClass("future");
    // // creating row for to hold time log
    // timeLogRow = $("<div class='row my-2'></div>");
    // // creating hour column
    // timeLogColumn = $("<div class='hour col-1'></div>");
    // timeLogColumn.text(day);
    // //append column to row
    // timeLogRow.append(timeLogColumn);
    // // description column
    // timeLogColumn = $("<div class='description col-10 past'></div>");
    // timeLogRow.append(timeLogColumn);
    // timeLogColumn = $("<div class='saveBtn col-1 d-flex align-items-center justify-content-center'><i class='fas fa-save'></i></div>");
    // timeLogRow.append(timeLogColumn);

    // timeLogHolder.append(timeLogRow);
}
