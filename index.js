import express from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

app.get('/', (req, res, next)=>{
    
    // res.set({
    //     'Content-Type': 'text/html',
    // })
    console.log(req.ip+req.url);
    res.status(200);
    res.send('hola mundo')
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
