$(document).ready(
  function() {
    var randomQuote = '' + "Debugging is twice as hard as writing the code in …are, by definition, not smart enough to debug it." + '';
    
    $("#new-quote").click(function() {
      $.getJSON(
        "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
        function(responseText) {
          $("#text-quote").html(responseText.quoteText);
          $("#author-name").html("- " + responseText.quoteAuthor);
          
          randomQuote = responseText.quoteText;
        });

      var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

      var color = Math.floor(Math.random() * colors.length);

      $("body").animate(
        {
          backgroundColor: colors[color],
          color: colors[color]
        },
        1000
      );
      
      $(".btn").animate(
        {
          backgroundColor: colors[color]
        },
        1000
      );
    });
    
    $("#tweet-quote").click(function() {
      window.open("https://twitter.com/intent/tweet?text=" + '"' + randomQuote + '"');
    });
  }
)