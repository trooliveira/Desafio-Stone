$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "users_ids.csv",
      dataType: "text",
      success: function(data) {processData(data);}
   });
});

function processData(allText) {
  var allTextLines = allText.split(/\n/);
  var index = [];
  var email = [];
  for (var i=1; i < allTextLines.length; i++){
      raw = allTextLines[i].split(';');
  index.push(raw[0]);
  email.push(raw[1]);
  };
  fixTransactions(index)
  sendEmails(email);

function fixTransactions(userIds) {
console.log('Corrigindo transações dos usuários enviados')
}

function sendEmails(userEmails) {
console.log('Enviando comunicação para os usuários impactados')
}

/* function main = async () => {
await fixTransactions()
await sendEmails()
} */

function main(){
processData(allText);
// this.then(() => console.log('Transações reprocessadas!'));
// this.catch(err => console.error(err));
}

}