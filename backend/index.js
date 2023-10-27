// importanje express module, dodati ga u packetjson pomoću komadne type:...
import express from "express"
import cors from "cors"

const app = express();
app.use(cors());

//definiranje backend rute
function fn_banana(req, res) {
    console.log("Banana je pozvana")
    return res.json({
        status: 'zelena'
    });
};

app.get('/banana', fn_banana);

//pokretanje procesa web servera
let port = 3000
function uspjeh() {
    console.log("Uspješno")
}
app.listen(port, uspjeh);
