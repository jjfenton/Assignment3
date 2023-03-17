document.getElementById("quoteButton").addEventListener("click", randomAlerts);

function randomAlerts() {
    const quote = [
    "Whoa! -- Keanu Reeves",
    "Believe you can and you're halfway there. -- Teddy Roosevelt",
    "I'm not here to be perfect. I'm here to be real. -- Lady Gaga",
    "We may encounter many defeats but we must not be defeated. -- Maya Angelou",
    "If you want something done, ask a busy person to do it. -- Laura Ingalls Wilder",
    "The best way to find out if you can trust somebody is to trust them. -- Ernest Hemingway",
    "You're not getting a raise. -- My Boss",
    "True terror is to wake up one morning and discover that your high school class is running the country. -- Kurt Vonnegut",
    "Always forgive your enemies; nothing annoys them so much. -- Oscar Wilde",
    "Never go to bed mad. Stay up and fight. -- Phyllis Diller"];
    
    let i = Math.floor(Math.random()*quote.length);
    window.alert(quote[i]);
}
