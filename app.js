const https = require("https");
 //print the data
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}
function getProfile(username){
// connect to api url()
https.get(`https://teamtreehouse.com/profiles/${username}.json`,
    (res) => {
 //read the data
    let body ="";
    res.on("data",data => {
    body += data.toString();
});
 //parse the data
res.on('end', () => {
    let profile = JSON.parse(body);
    printMessage(
        username,
        profile.badges.length, 
        profile.points.JavaScript
    );
});
}
);
}
getProfile("westonrwigema");