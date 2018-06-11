$( document ).ready(function () {

  var inputElement = $('input');
  var textArea = $('textarea');
  var answerElement = $('#answer');
  var textbox = $('.textbox');
  var eball = $('.eball');

  eball.mouseenter ( function(){
    var text = textArea.val().trim();
    if (text) {
      $.post( "topic", { text: text })
      .done(function( data ) {
        textbox.html(data.category)
      });
    } else {
      textbox.html('');
    }
  });
});
