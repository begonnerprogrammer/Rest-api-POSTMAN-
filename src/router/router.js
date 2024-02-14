const express=require("express");
const router= new express.Router();
const runner=require("../models/schemamodel")



router.get("/",(req,res)=>{
  res.json("Complete REST-API(POSTMAN)")
})





router.get("/runner",async(req,res)=>{
    try{
        const getmens=await runner.find({}).sort({"ranking":1}); //sort method will sort the api according with some order
        res.status(201).send(getmens)
    }
    catch(e){
        res.status(400).send(e)
    }
    })

    router.get("/runner/:id",async(req,res)=>{
        try{
            const id=req.params.id; //it will get the id of user
            const getmen=await runner.findById(id);
            res.status(201).send(getmen)
        }
        catch(e){
            res.status(400).send(e)
        }
        })


        router.post("/runner",async(req,res)=>{
            try{
                 const menranking=new runner(req.body);
                 console.log(req.body);
            
                const newranking=await menranking.save();  //to save it in the database
                res.status(201).send(newranking)
            }
            catch(e){
                res.status(400).send(e)
            }
            })


        router.patch("/runner/:id",async(req,res)=>{
            try{
                const id=req.params.id;
                const getmen=await runner.findByIdAndUpdate(id,req.body,{
                    new:true //document will update immediately
                });
                res.status(201).send(getmen)
            }
            catch(e){
                res.status(400).send(e)
            }
            })



            router.delete("/runner/:id",async(req,res)=>{
                try{
                    const getmen=await runner.findByIdAndDelete(req.params.id);
                    res.status(201).send(getmen)
                }
                catch(e){
                    res.status(400).send(e)
                }
                })





module.exports=router;