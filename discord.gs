// discordのチャンネルにメールのメッセージを送信する. 
function sendToDiscord(emailDate, emailFrom, emailSubject, emailBody){
  const webhookURL = 'ENTER_YOUR_WEBHOOK_URL_OF_DISCORD';

  /* //test data
  emailDate="2022-01-01T00:00:00+09:00"
  emailFrom="test from"
  emailSubject="test subject"
  emailBody="test body"
  */

  //discordは2000文字しか送れないため、文字数を制限する
  if(emailBody.length>1024){
    emailBody = emailBody.substr(0,1021) + "...";
  }

  const payload = {
    content: "メールが届きました",
    embeds: [{
      title: emailSubject,
      author: {
        name: emailFrom,
      },
      description: emailBody,
      footer: {
        text: emailDate
      },
    }],
  }
  const payloadJson = JSON.stringify(payload)
  const request = {
    url: webhookURL,
    method: 'post',
    contentType: 'application/json',
    payload: payloadJson,
  };

  //console.log(request);
  response = UrlFetchApp.fetchAll([request]);
}

