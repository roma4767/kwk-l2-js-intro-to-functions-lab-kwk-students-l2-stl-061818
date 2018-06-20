function getUKTime() {
  let UKtime = new Date().getHours() + 5;
  return UKtime
}

function discountTicket(originalPrice) {
  let actualPrice = originalPrice*0.8;
  return actualPrice
}

function tweetReply(fanName) {
  let greeting = `Hey ${fanName}, thanks so much for the support! I really appreciate it!`
  return greeting
}
