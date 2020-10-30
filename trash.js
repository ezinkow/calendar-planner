var displayDate = moment().format("MMMM Do, YYYY")
var displayTime = moment().format("h:mm a")
var milTime = moment().format("H")
var timeBlocks = document.querySelector(".container")
var todoList = document.querySelector("#todo-list")
var todos = [""]
var timeSlots = ["09", "10", "11", "12", "1", "2", "3", "4", "5"];
var save = document.querySelector("#save")
var schedule = document.querySelector("#schedule")
var time = document.querySelector("#time")
// var dailySchedule = $("<div>");
// var saveButton = $("<button>");
// var todoInput = $("<input>");

// display current day, date and year
$("#currentDay").text(moment().format("MMMM Do, YYYY"))
$("#currentTime").text(moment().format("h:mm a"))

localStorage.getItem("todos", JSON.stringify(todos))
$("textarea").append(todos)

// hours in the past display gray, current hour displays red, future hours display green
// give user ability to enter event
// event saves in local storage so refreshing the page does not delete said event

var saveBtn = $(".saveBtn")
    saveBtn.on("click",function(event) {
        event.preventDefault()      

for (var i = 0; i < timeSlots.length; i++) {
        var input = $("#input" + timeSlots[i]).val()
        saveBtn.attr("value",input)
        todos.push(input)
        console.log("for loop!")
    }
})


//     // var timeCol = timeSlots[i]
    
//     var dailySchedule = $("<div>");
//     var todoInput = $("<input>");
//     var saveButton = $("<button>");
//     dailySchedule.addClass("row col-12 time-row")
//     dailySchedule.attr("time-slots", timeSlots[i])
//     dailySchedule.text(timeSlots[i])
//     todoInput.addClass("row col-12")
//     // todoInput.attr("todos", i)
//     todoInput.text("")
//     saveButton.addClass("saveBtn row col-12")
//     // // saveButton.attr("saveBtn", i)
//     saveButton.text("SAVE")
//     $("#time").append(dailySchedule)
//     $("#schedule").append(todoInput)
//     $("#save").append(saveButton)
//     }






// $("button").click(function(){
//     todos.push(textInput.value)
//     console.log(todos)
//     localStorage.setItem("todos", JSON.stringify(todos))
// })


// $(".saveBtn").each(function(){
//     var tableBtn = $(this).attr("id")
//     $("#btn"+tableBtn).click(function(){
//         console.log(todos)
        // localStorage.setItem("todos", JSON.stringify(todos))
// })})
    
// for (var i = 0; i < timeSlots.length; i++) {
//     document.querySelectorAll('.saveBtn').forEach(saveBtn => {
//         saveBtn.addEventListener('click', event => {
//             var textInput = document.querySelector("#input"+timeSlots[i])
//             todos.push(textInput)
//             localStorage.setItem("todos", JSON.stringify(todos))
//             console.log(textInput)
//     })})}

    // let btns = document.querySelectorAll('button');

    // for (i of btns) {
    //   i.addEventListener('click', function() {
    //     console.log(this);
    //     todoText = todoInput.value;
    //     todos.push(todoText);
    //     console.log(todos)
    //     console.log(todoTex)
    //   });
    // }
    //   btns.on("click",function(event) {
    //     event.preventDefault();
    //     var todoText = todoInput.value;
    //     todos.push(todoText);
    //     console.log(todos)
    //     console.log(todoText)
    //     schedule.value = "";
        // localStorage.setItem("todos", JSON.stringify(schedule));
    //     })


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



    // save.addEventListener("click", function(event) {
    //     event.preventDefault();
    //     var todoText = schedule[0];
    //     todos.push(todoText);
    //     console.log(todos[0])
    //     // schedule.value = "";
    //     storeTodos()
    //     });
    
        // console.log(todos)
        // console.log(localStorage)
        // console.log(todoText)
        
    
   


// function renderTodos() {
    
// }



