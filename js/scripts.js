$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var madlibs = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
      madlibs.forEach(function(madlib) {
        var userInput = $("input#" + madlib).val();
        $("." + madlib).text(userInput);

        $("#story").show();

      event.preventDefault();
      console.log()
    });
  });
});
