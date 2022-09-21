//gmailからメールを取得して、discordに送信する.
function getEmailsAndSendToDiscord() {
  let lastTime = getStoredDate();
  if(lastTime==null){
    lastTime = new Date();
    storeDate(lastTime);
    throw new Error("last email checked time is not found in store.")
    return;
  }

  let [msgs, latest] = getMailMessages(lastTime);

  for(let i=0; i<msgs.length; i++){
    for(let j=0;j<msgs[i].length;j++){
      let msg = msgs[i][j];
      let fromEmail = msg.getFrom();
      let sub = msg.getSubject();
      let body = msg.getPlainBody();
      let date = msg.getDate();
      sendToDiscord(date, fromEmail, sub, body);
    }
  }

  //メール受信では誤差がある(受信日時≠メールの日時)ため、これをnowTimeで保存するのは良くない. 
  storeDate(latest);
  console.log("finished without error!")
}

//何かあってメールを取得する日時を(リ)セットしたい時に使う. 
function setLastCheckedDatetime(date){
  //date = new Date(2022,8,21,16,45); //月は0~11のため、9月の場合は8を入力する, 
  storeDate(date);
}
