const express = require("express")
const app = express()

//permite usar json no express
app.use(express.json())


app.get("/", (req, res) => {
    return res.json({ titulo: "Olá mundo" })
})

app.listen(9090, () => {
    console.log("Servidor iniciado com sucesso.")
})