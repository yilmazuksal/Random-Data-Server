const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/people',(req,res) => {
    const names = ['John','Amy','Richard','Rob','Michael','Julia','Mary','Terry','Jane','Jaelyn',
    'Jacob','Jay','Steve','Justin','Nicholas','Andrew','Carmen','Siri','Jun','Anthony','Charlie',
    'Sophia','Max','Tyler','Julia','Judy','Brad','Timoty','Edward','Jason','Van Damme'];
    const jobs = ['Actor','Engineer','Ceo','Software Developer','Pilot','Driver','Cashier',
    'Manufacturer','Chef','DBA','Race Driver','Analyst'];
    let people = [];

    for(let i=1;i<250;i++){
        const randomNameIndex1 = Math.ceil(Math.random()*(names.length-1)); 
        const randomNameIndex2 = Math.ceil(Math.random()*(names.length-1));
        const randomJobIndex = Math.ceil(Math.random()*(jobs.length-1));
        let name = `${names[randomNameIndex1]} ${names[randomNameIndex2]}`;
        let job = jobs[randomJobIndex];
        people.push({name,job});
    }

    
    
    res.send({people: people});
});

app.listen('8080',() => 'Server running on port 8080');