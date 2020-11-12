$(document).ready(function(){
// var to get time
var milTime = moment().format("H")

// add day and time to page
$("#currentDay").text(moment().format("MMMM Do, YYYY"))
$("#currentTime").text(moment().format("h:mm a"))

// save schedule item to local storage
$(".saveBtn").on("click",function(){
    //by clicking save button, all buttons will get value of text in activity input field
    var activity = $(this).siblings(".activity").val()
    //set time var to the id of the parent of each button, which is the time for that row
    var time = $(this).parent().attr("id")
    //save to local storage, key is time, value is activity
    localStorage.setItem(time, activity)
})

// get schedule item from local storage and save it in the row
$("#09 .activity").val(localStorage.getItem("09"))
$("#10 .activity").val(localStorage.getItem("10"))
$("#11 .activity").val(localStorage.getItem("11"))
$("#12 .activity").val(localStorage.getItem("12"))
$("#13 .activity").val(localStorage.getItem("13"))
$("#14 .activity").val(localStorage.getItem("14"))
$("#15 .activity").val(localStorage.getItem("15"))
$("#16 .activity").val(localStorage.getItem("16"))
$("#17 .activity").val(localStorage.getItem("17"))


// color code rows
$(".timeSlot").each(function(){
    var scheduleHour = $(this).attr("id")
        if (scheduleHour > milTime) {
            $("#text"+scheduleHour).addClass("future")
        }
            else if(scheduleHour === milTime) {
                $("#text"+scheduleHour).addClass("present")
            }
                else {$("#text"+scheduleHour).addClass("past")}
            
        })
})