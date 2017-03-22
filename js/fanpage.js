$(document).ready(function() {
    var html = "";
    $("#getQuote").on("click", function() {
        $.getJSON("http://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
            json.forEach(function(val) {
            html = val;
        });
     $("#quote").html(html);
    });
  });

})  

