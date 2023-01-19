// Displaying current day

var today = moment().format('LLL');
$("#currentDay").text(today);

// Displaying current time

var localTime = moment().format('HH');
console.log(localTime)

// Saving to local storage

$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var userInfo = $(this).prev().val();
    console.log(userInfo)
    localStorage.setItem($(this).prev().attr("id"), userInfo)
});

// Different colors for indication of past, present and future times

   $("input").each(function () {
        var selectedInput = parseInt($(this).attr("id"));

        if (selectedInput > localTime) {
            $(this).addClass("future")
        }

        else if (selectedInput == localTime) {
            $(this).addClass("present")
        }

        else {
            $(this).addClass("past")
        };

        $("#" + selectedInput).val(localStorage.getItem(selectedInput))
    });
