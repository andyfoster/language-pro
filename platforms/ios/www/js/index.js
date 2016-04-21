$(document).ready(function(){

    var words = ["possibile", "por", "me", "non", "e", "sono", "adesso"];

    //var shuffled_words = shuffle(words);

    // Alphabetical order is probably better than shuffle
    var shuffled_words = words.sort();

    for (word in shuffled_words) {
        $('#choices').append("<span>" + shuffled_words[word] + "</span>");
    }

    var box = $("#input");

    $('#input').on('click', function() {
        //$(this).empty();
        $(this).text(" ");
    });

    String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    $("#choices span").on('click', function() {
     //alert($(this).text());
     if (box.text() === "&nbsp;"){
        box.empty();
     }
     box.append($(this).text());
     box.append(" ");
     box.text().capitalizeFirstLetter();
    });

    $(".button-check").on('click', function(){
        if (box.text().trim() === "non e possibile por me") {
        $(".button-check").css('background', 'green').text("Correct! Next question >>");
        box.addClass('success');
      } else {
            $(".button-check").css('background', 'red').text("Not quite. Try again");
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
        "question"  : "It is not possible for me",
          "answer"  : "non e possibile por me",                   
      },
      {
          "number"  : 2,
        "question"  : "I don't like it",
          "answer"  : "non lo piache",                   
      },
      {
          "number"  : 3,
        "question"  : "I want to eat it",
          "answer"  : ["lo volgio mangare", "voglio mangarlo"]      
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






});
