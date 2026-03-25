require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000


const githubData = {
  "login": "mohammad-ali-1129",
  "id": 149752175,
  "node_id": "U_kgDOCO0Jbw",
  "avatar_url": "https://avatars.githubusercontent.com/u/149752175?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mohammad-ali-1129",
  "html_url": "https://github.com/mohammad-ali-1129",
  "followers_url": "https://api.github.com/users/mohammad-ali-1129/followers",
  "following_url": "https://api.github.com/users/mohammad-ali-1129/following{/other_user}",
  "gists_url": "https://api.github.com/users/mohammad-ali-1129/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mohammad-ali-1129/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mohammad-ali-1129/subscriptions",
  "organizations_url": "https://api.github.com/users/mohammad-ali-1129/orgs",
  "repos_url": "https://api.github.com/users/mohammad-ali-1129/repos",
  "events_url": "https://api.github.com/users/mohammad-ali-1129/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mohammad-ali-1129/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohammad Ali",
  "company": null,
  "blog": "",
  "location": "Punjab",
  "email": null,
  "hireable": null,
  "bio": "Aspiring Software Developer\r\n",
  "twitter_username": null,
  "public_repos": 24,
  "public_gists": 0,
  "followers": 1,
  "following": 7,
  "created_at": "2023-11-03T03:56:59Z",
  "updated_at": "2026-01-28T18:18:28Z"
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ali', (req, res) => {
  res.send('Ali')
})


app.get('/github', (req,res) => {
    res.json(githubData)
})

app.get('/login', (req,res) => {
    res.send('<h1>Ali this side </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
