// importanje express module, dodati ga u packetjson pomoću komadne type:...
import express from "express"

const app = express();

//definiranje backend rute
app.get('/banana', (req, res) => {
    res.json({
        status: 'zelena'
    });
});

//pokretanje procesa web servera
let port = 3000
app.listen(port, () => {
    console.log('Server is running on https://localhost:3000')
});
