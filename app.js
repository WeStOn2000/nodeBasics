const https = require("https");

https.get('https://teamtreehouse.com/profiles/westonrwigema.json',(res) => {
 let body ="";
    res.on("data",data => {
    body += data.toString();
});
res.on('end', () => {
    console.dir(JSON.parse(body));
})
});