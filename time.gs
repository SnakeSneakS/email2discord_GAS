function getUnixTime(time){
  /*const formatTime = Utilities.formatDate(time, 'GMT', 'dd MMM yyyy HH:mm:ss z')
  const unixTime = Date.parse(formatTime)/1000*/
  const unixTime = time.getTime() / 1000;
  return unixTime;
}
