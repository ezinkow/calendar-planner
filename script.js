var displayDate = moment().format("MMMM Do, YYYY")
const displayTime = moment().format("h:mm a")
var timeBlocks = document.querySelector(".container")
var todoList = document.querySelector("#todo-list")
var todos = [""]
var timeSlots = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var save = document.querySelector("#save")
var schedule = document.querySelector("#schedule")
var time = document.querySelector("#time")
// var dailySchedule = $("<div>");
// var saveButton = $("<button>");
// var todoInput = $("<input>");

// display current day, date and year
$("#currentDay").text(displayDate)
$("#currentTime").text(displayTime)


/* create time blocks for business hours 9-5
hours in the past display gray, current hour displays red, future hours display green
give user ability to enter event
event saves in local storage so refreshing the page does not delete said event

*/
for (var i = 0; i < timeSlots.length; i++) {
    var timeCol = timeSlots[i]
    
    // var dailySchedule = $("<div>");
    // var todoInput = $("<input>");
    // var saveButton = $("<button>");
    // dailySchedule.addClass("row col-12 time-row")
    // dailySchedule.attr("time-slots", timeSlots[i])
    // dailySchedule.text(timeSlots[i])
    // todoInput.addClass("row col-12")
    // // todoInput.attr("todos", i)
    // todoInput.text("")
    // saveButton.addClass("saveBtn row col-12")
    // // saveButton.attr("saveBtn", i)
    // saveButton.text("SAVE")
    // $("#time").append(dailySchedule)
    // $("#schedule").append(todoInput)
    // $("#save").append(saveButton)
    }


    // let btns = document.querySelectorAll('button');

    // for (i of btns) {
    //   i.addEventListener('click', function() {
    //     console.log(this);
    //   });
    // }
    //   Btns.on("click",function(event) {
        // event.preventDefault();
        // var todoText = todoInput.value;
        // todos.push(todoText);
        // console.log(todos)
        // console.log(todoText)
        // schedule.value = "";
        localStorage.setItem("todos", JSON.stringify(schedule));
        })}

var currentTime = new Date().getHours();
console.log(currentTime)
if (document.body) {
    if (Number(timeSlots) < currentTime) {
        $("#schedule").addClass(".future")
    }
        else if(Number(timeSlots) === currentTime) {
            $("#schedule").addClass(".present")
        }
            else {$("#schedule").addClass(".past")}
        
    }


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



