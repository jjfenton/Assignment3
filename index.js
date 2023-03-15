function randomAlerts() {
    var alerts = new Array (
    "Nice one!",
    "I bet it's fancy!",
    "Whazzit, whosa! Wowza!",
    "That is a neat ride!",
    "Live long and prosper.");
    
    var i = Math.floor(Math.random()*alerts.length);
    
    
   window.alert(alerts[i]);
}
