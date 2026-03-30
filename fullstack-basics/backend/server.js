import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send("Server is ready")
})

app.get('/api/jokes', (req,res) => {
    const jokes = [
  {
    id: 1,
    title: "Programmer Problem",
    content: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 2,
    title: "Job Quit",
    content: "Why did the programmer quit his job? Because he didn't get arrays."
  },
  {
    id: 3,
    title: "Light Bulb",
    content: "How many programmers does it take to change a light bulb? None, it's a hardware problem."
  },
  {
    id: 4,
    title: "Java vs C#",
    content: "Why do Java developers wear glasses? Because they don't C#."
  },
  {
    id: 5,
    title: "Programmer Hangout",
    content: "What is a programmer's favorite place to hang out? The Foo Bar."
  }
];
    res.send(jokes)
})


const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server is listen at ${port}`);
})