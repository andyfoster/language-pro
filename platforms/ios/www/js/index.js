$(document).ready(function(){

    var words = ["possibile", "per", "me", "non", "e", "sono", "adesso"];

    //var shuffled_words = shuffle(words);

    // Alphabetical order is probably better than shuffle
    var shuffled_words = words.sort();

    for (word in shuffled_words) {
        $('#choices').append("<span>" + shuffled_words[word] + "</span>");
    }

    var box = $("#input");

    $('#input').on('touchend', function() {
        //$(this).empty();
        $(this).text(" ");
        //$(this).append('<div class="reset-button>x</div>');
    });

    $("#choices span").on('touchend', function() {
     //alert($(this).text());
     if (box.text() === "&nbsp;"){
        box.empty();
     }
     box.append($(this).text());
     box.append(" ");
    });

    $(".button-check").on('touchend', function(){
	    console.log("This:" + box.text().trim());
        if (box.text().trim() === "non e possibile per me") {
        $(".button-check").css('background', 'green').text("Correct! Next question >>");
        box.addClass('success');
      } else {
            $(".button-check").css('background', 'red').text("Not quite. Try again");
            setTimeout(function(){
	            $(".button-check").css('background', '#42a9f6').text("Second Chance");
            }, 800);
      }
    });


    // Fisher–Yates Shuffle Algorithm
    function shuffle(array) {
      var currentIndex = array.length, 
            temporaryValue, 
            randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }


    var Questions = { "question" : [
      {
          "number"  : 1,
		  	"hint"  : "It is not possible for me",
          "answer"  : "non e possibile per me",                   
      },
      {
          "number"  : 2,
		  	"hint"  : "I don't like it",
          "answer"  : "non lo piache",                   
      }
    ]};

    var Score = [{
        "userId": 34,
        "question": 1,
      "last_practiced": "1 March 2015 16:45",
      "last_result": "correct",
      "number_correct": 3
    }];
 

    console.log(Questions.question.length);

    for (q in Questions.question) {
        console.log(Questions.question[q].answer);
    }
    
    var currentQuestion = 1;
    
    function generateQuestion() {
	    var selectedQuestion = Questions.question[currentQuestion - 1];
	    console.log("Q: " + selectedQuestion.hint);
	    console.log("A: " + selectedQuestion.answer);
	    
	    
	    for(var j = 1; j <= 5; j++) {
		    
	    }
	    
    }
    generateQuestion();
 
 
 
 
    // make an array of all dummy words
    function grabDummyWords() {
	    var dummyWords = [];
	    for (i in Questions.question) {
			dummyWords += Questions.question[i].answer.split(" ");
	    }
	    return dummyWords;
    }
    grabDummyWords();
    

	// Give them a hint if they get it wrong twice
  // remove the dummy words but subtract a point





});
