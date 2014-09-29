$(document).foundation();



$(function() {
  // effects basics 
  $("#clicker1").click(function() {
    $("#clicker1").html($("#clicker1").text() === "Show" ? "Hide" : "Show");
    $("#target1").toggle();
  });
  
  $("#clicker2").click(function() {
    $("#clicker2").html($("#clicker2").text() === "Show" ? "Hide" : "Show");
    $("#target2").toggle(function() {
      $("#target2").css("visibility", "hidden");
      }, function() {
      $("#target2").css("visibility", "show");
    });
  });


  $("#slide").click(function() {
    var clicks = $(this).data("clicks");
    if (clicks) {
      $(this).animate({
        "marginLeft" : "-=80%"
      });
    } else {
      $(this).animate({
        "marginLeft" : "+=80%"
      });
    }
    $(this).data("clicks", !clicks);
  });

  var state = true;
  $("#color").click(function() {
    if (state) {
      $( "#color" ).animate({
      backgroundColor: "#a0d3e8",
      color: "#fff",
      }, 1000 );
    } else {
    $( "#color" ).animate({
      backgroundColor: "#f04124",
      color: "#fff",
      }, 1000 );
    }
    state = !state;
  });

  $("#extra").click(function() {
    var clicks = $(this).data("clicks");
    if (clicks) {
      $("#fade").fadeOut();
      } else {
      $("#fade").fadeIn();
      }
    $(this).data("clicks", !clicks);
  });

  // interaction basics
  $(".drag").draggable({ containment: "parent" });
  $("#drop").droppable({
    hoverClass: "ui-drop",
    drop: function() {
    $( this )
      .addClass("ui-dropped")
      .html("")
      .siblings()
      .html("Dropped!");
    }
  });

  $("#resizable").resizable({ handles: "n, e, s, w" });
  $("#selectable").selectable();
  $("#sortable").sortable();
  $("#accordion").accordion({event: "click hoverintent",heightStyle: "content"});
  
  $("#dialog").dialog({
    autoOpen: false,
    show: {duration:500},
    hide: {duration:500},
  });


  $("#dialog-open").click(function() {
    $("#dialog").dialog("open");
  });

 $("#tooltip").tooltip({
  items: "div",
  track: "true",
  content: "Hey, I'm a tooltip!",
  });
});
