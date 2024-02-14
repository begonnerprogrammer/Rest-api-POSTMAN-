require("./src/db/conn");
const mongoose=require("mongoose");
const express=require("express");
const app=express();
const runner=require("./src/models/schemamodel");
const port= process.env.PORT|| 4000;
const router=require("./src/router/router");
app.use(express.json());
const path=require("path");
const staticpath=path.join(__dirname,"./public")
app.use(express.static(staticpath));
app.use(router);
app.listen(4000,()=>{
    console.log(`connected on the port ${port}`)
})