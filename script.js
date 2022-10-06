// $(document).ready(function () {
//     console.log(moment().format("dddd, MMMM Do YYYY"));
// })
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var workDay = [
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

var timeLogHolder = $('.container');
var timeLogRow;
var timeLogColumn;
// timeLogHolder.append(timeLogRow); 
for (const day of workDay) {
    // creating row for to hold time log
    timeLogRow = $("<div class='row my-2'></div>");
    // creating hour column
    timeLogColumn = $("<div class='hour col-1'></div>");
    timeLogColumn.text(day);
    //append column to row
    timeLogRow.append(timeLogColumn);
    // description column
    timeLogColumn = $("<div class='description col-10 past'></div>");
    timeLogRow.append(timeLogColumn);
    timeLogColumn = $("<div class='saveBtn col-1 d-flex align-items-center justify-content-center'><i class='fas fa-save'></i></div>");
    timeLogRow.append(timeLogColumn);

    timeLogHolder.append(timeLogRow);
}

{
  /* <div class="row my-2">
        <div class="hour col-1 ">
            9AM

        </div>
        <div class="description col-10 past">

        </div>
        <div class="saveBtn col-1 d-flex align-items-center justify-content-center">
          <i class="fas fa-save"></i>
        </div>
      </div> */
}
