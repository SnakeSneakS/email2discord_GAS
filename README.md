# email2discord_GAS
- Google Apps Scriptを使ってメールをdiscordに転送するやつ
- 5分おきに、　「新規メールを取得 -> 新規メールあればdiscordに送信 -> 最終メール時刻を保存(次回の新規メール取得時に用いる)」を実行している. 

# setup
1. create google spreadsheet
2. open extension `Apps Scripts`
3. create files in this repository
  - enter your `webhookURL` in discord.gs. 
4. scheduling to exec getEmailsAndSendToDiscord() regulary.
