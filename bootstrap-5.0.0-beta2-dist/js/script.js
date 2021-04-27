$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
  });

function copiaemail() {
    var text = "alessio.calore96@gmail.com";
    copytoclipboard(text);
} 

function copiacell() {
    var text = "+393402956476";
    copytoclipboard(text);
} 

function copytoclipboard(text){
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });
}
  