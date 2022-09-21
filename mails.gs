//since 以降のメールを全て取得する. 
//1日20000件までのみ取得可能らしい.
//取得したのち、最後のメールの日時も返す. 
// return: (messages, date)
function getMailMessages(since){
  //since = new Date(2022,8,15); //月は0~11
  let threads = GmailApp.search(`after:${getUnixTime(since)}`, 0, 100);
  let msgs = GmailApp.getMessagesForThreads(threads);

  let latest = since;

  let msg_num = 0;
  let new_msgs = new Array(msgs.length);
  for(let i=0;i<msgs.length;i++){
    new_msgs[i] = new Array();
    for(let j=0; j<msgs[i].length; j++){
      const msgDate = msgs[i][j].getDate()
      if(msgDate > since){
        new_msgs[i].push(msgs[i][j]); //送信対象に追加
        msg_num ++;
        if(msgDate > latest){
          latest = msgDate;
        }
      }
    }
  }
  console.log("new gmail messages is ", msg_num ," since ", since, ".\nlatest message: ", latest);
  return [new_msgs, latest];
}
