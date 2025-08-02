require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res)=>{
    res.send('facebook site is accessable')
})

// we give many type of data like html tag and json etc like given below 
 
app.get('/login',(req , res)=>{
    res.send("<h1>Hello its login page </h1>")
})

// for chai only 

app.get('/chai' , (req , res) => {
    res.send("<h1>Hello its chai our code hardworking games</h1>")
})



// for github data of hitesh sir  how we do this 


const githubdata = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 111,
  "public_gists": 5,
  "followers": 47160,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-07-28T07:05:10Z"
}


app.get('/githubdata' , (req , res) => {
    // res.send(githubdata)  but this is basic we go bor doc and see the json data handling method

    res.json(githubdata)
})

app.get('/slush' , (req , res) => {
    res.send("its not available")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
