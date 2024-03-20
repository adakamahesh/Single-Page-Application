// Importing the Express module
const express=require ("express");
// Importing the path module
const path=require ("path");

// Creating an Express application
const app=express();

// Serving static files from the "frontend/static" directory under the "/static" route
app.use("/static",express.static(path.resolve(__dirname,"frontend","static")))

// Handling all other routes
app.get("/*",(req,res)=>{
    // Sending the index.html file located in the "frontend" directory
    res.sendFile(path.resolve(__dirname,"frontend","index.html"));
});

// Listening on the specified port or default port 5000
app.listen(process.env.PORT||5000,()=>console.log("server running..."));
