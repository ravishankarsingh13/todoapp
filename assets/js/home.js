const todoList = document.querySelector('ul');
var ul = document.getElementById("list");
var listItems = ul.getElementsByTagName("li");




// function to show TOOLTIP text over icons
$( function() {
  $( document ).tooltip();
} );



// Filters the list and show all completed tasks
function show_complete()
{
  $('#checked').click(function() {
    $('.default').hide();
    $('.check').show();
  });
}
// Filters the list and show all tasks
function show_all()
{
  $('#all').click(function() {
    $('.default').show();
    $('.check').show();
  });
}

// Filters the list and show all incompleted tasks
function show_incomplete()
{
  $('#unchecked').click(function() {
    $('.default').show();
    $('.check').hide();
  });
}
