var displayDate = moment().format("MMMM Do, YYYY")
const displayTime = moment().format("h:mm a")
var timeBlocks = document.querySelector(".container")
var todoList = document.querySelector("#todo-list")
var todos = [""]
var timeSlots = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];



// display current day, date and year
$("#currentDay").text(displayDate)
$("#currentTime").text(displayTime)


/* create time blocks for business hours 9-5
hours in the past display gray, current hour displays red, future hours display green
give user ability to enter event
event saves in local storage so refreshing the page does not delete said event

*/
function makeRows() {
for (var i = 0; i < timeSlots.length; i++) {
    var dailySchedule = $("<div>");
    dailySchedule.addClass("row col-12 time-row")
    dailySchedule.attr("time-slots", timeSlots[i])
    dailySchedule.text(timeSlots[i])
    $("#time").append(dailySchedule)
}

for (var i = 0; i < timeSlots.length; i++) {
    var todoInput = $("<input>");
    todoInput.addClass("row col-12 future")
    todoInput.attr("todos", i)
    todoInput.text("")
    $("#schedule").append(todoInput)
}

for (var i = 0; i < timeSlots.length; i++) {
    var saveButton = $("<button>");
    saveButton.addClass("saveBtn row col-12")
    saveButton.attr("saveBtn", i)
    saveButton.text("SAVE")
    $("#save").append(saveButton)

}
}
makeRows()

    saveButton.addEventListener("click", function(event) {
        event.preventDefault();
        var todoText = todoInput.value;
        todos.push(todoText);
        todoInput.value = "";
        storeTodos()
        });
    
        // console.log(todos)
        // console.log(localStorage)
        // console.log(todoText)
        
    
   


// function renderTodos() {
    
// }

function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

