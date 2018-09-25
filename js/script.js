$(document).ready(function() {
  var rq;
  var auth;

  function getQuote() {
    var url =
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

    $.getJSON(url, function(data) {
      $("#quote").html(data.quoteText);
      rq = data.quoteText;
      $("#author").html(data.quoteAuthor);
      auth = data.quoteAuthor;
    });
  }

  getQuote();
  $("#NewQ").on("click", function() {
    getQuote();
  });
  $("#twitter").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + rq + "By:" + auth);
  });
});
