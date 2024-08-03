import 'dotenv/config';
import express from 'express'
const app = express()
const port = 3000

app.use(express.static('dist'))

// app.get('/', (req, res) => {
  // res.send('Hello World!')
// })

app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id : 1,
      title : "joke1",
      content : "this is joke"
    },
    {
      id : 2,
      title : "joke2",
      content : "this is joke"
    },
    {
      id : 1,
      title : "joke2",
      content : "this is joke"
    },
    {
      id : 1,
      title : "joke2",
      content : "this is joke"
    }
  ]
  res.send(jokes)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})