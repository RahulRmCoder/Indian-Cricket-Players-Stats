import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const statsFilePath = path.join(__dirname, 'stats.json');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended:true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.get('/', (req,res) =>{
    res.render("index", { stat:null });
})

app.post('/stats', (req,res) => {
    fs.readFile(statsFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading stats.json file:", err);
            return res.status(500).send("Internal Server Error");
        }

        const stats = JSON.parse(data); 
        const choice = req.body.choice.toLowerCase();
        const stat = stats.find(s => s.name.toLowerCase().includes(choice)); 

        res.render("index", { stat }); 
    });
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})