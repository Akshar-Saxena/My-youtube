const { google } = require('googleapis')
const express = require("express")
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/search', (req, res) => {
    google.youtube('v3').search.list({
        key: 'AIzaSyCeXa51XNJ2Kf37fm1zd4GD1_75q21A4SU',
        part: 'snippet',
        q: req.query.q,
        type: 'video',
        maxResults: 23
    }).then((resp) => {
        res.json(resp)
        console.log(resp)
        // resp.data.items.forEach(element => {
        //     video.src = `https://youtube.com/watch?v=${element.id.videoId}`
        // })
    }).catch((err) => {
        console.error(err)
    })
})

app.listen(3000, () => {
    console.log("Server started over port 3000.")
})