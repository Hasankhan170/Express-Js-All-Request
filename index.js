import express from "express";
import cors from "cors";
const app = express()
const port = 3000

const TodoArr = []

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//user add 
app.post('/todo',(req,res)=>{
    const {title} = req.body;
    if(!title){
        res.status(404).json({
            massage :"title is Required"
        })
        return
    }

    TodoArr.push({
        title,
        id : Date.now()
    })

    res.status(200).json({
        massage :"todo is created successfully",
        data : TodoArr
    })
})

//user get
app.get('/todos',(req,res)=>{
    res.status(200).json({
        massage:'get all todo',
        data:TodoArr
    })
})

//user edit
app.put("/todos/:id",(req,res)=>{})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})