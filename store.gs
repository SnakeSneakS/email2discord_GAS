const Keys = {
  emailDate: "emailDateTime",
}
function storeDate(date) {
  let p = PropertiesService.getScriptProperties();
  p.setProperty(Keys.emailDate,date);
}

function getStoredDate(){
  let p = PropertiesService.getScriptProperties();
  let date = p.getProperty(Keys.emailDate);
  return new Date(date);
}
