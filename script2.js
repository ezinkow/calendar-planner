$(document).ready(function(){
var milTime = moment().format("H")

$(".saveBtn").on("click",function(){
    var activity = $(this).siblings(".activity").val()
    var time = $(this).parent().attr("id")
    console.log("activity:", activity, "time:", time)
    localStorage.setItem(time, activity)
})

$(".timeSlot").each(function(){
    var scheduleHour = $(this).attr("id")
        if (scheduleHour > milTime) {
            $("#text"+scheduleHour).addClass("future")
        }
            else if(scheduleHour === milTime) {
                $("#text"+scheduleHour).addClass("present")
            }
                else {$("#text"+scheduleHour).addClass("past")}
            
        }
)

// $("#09 .activity").val(localStorage.getItem("09"))
// $("#10 .activity").val(localStorage.getItem("10"))
// $("#09 .activity").val(localStorage.getItem("09"))
// $("#09 .activity").val(localStorage.getItem("09"))
// $("#09 .activity").val(localStorage.getItem("09"))
// $("#09 .activity").val(localStorage.getItem("09"))
// $("#09 .activity").val(localStorage.getItem("09"))
// $("#09 .activity").val(localStorage.getItem("09"))







})