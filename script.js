$(document).ready(function () {
    console.log(moment().format("dddd, MMMM Do YYYY"));
})
$("#currentDay").text(moment().format("dddd, MMMM Do"));