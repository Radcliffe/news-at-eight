$( document ).ready(function () {

  var inputElement = $('input');
  var textArea = $('textarea');
  var answerElement = $('#answer');
  var textbox = $('.textbox');
  var eball = $('.eball');
  var oldtext = '';

  eball.mouseenter ( function(){
    var text = textArea.val().trim();
    if (text == '') {
      textbox.html('');
    } else if (text != oldtext) {
      textbox.html('');
      $.post( "topic", { text: text })
      .done(function(data) {
        textbox.html(data.category);
        oldtext = text;
      });
    }
  });
});
