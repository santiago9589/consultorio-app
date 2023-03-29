import Express from "express"

const app = Express()
const PORT = process.env.PORT || 4000


app.use(Express.urlencoded({extended:false}))
app.use(Express.json())
app.use(Express.static(process.cwd()+"/dist"))

app.listen(PORT, () => {
    console.log("running 5000")
})