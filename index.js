const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const userApiFromRouter=require('./routes/userRouter');
const app = express();
const port = 3001
const url='mongodb+srv://nbsnarahari:Ds6xcjJ0rO6pXSyp@cluster0.gpinard.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())//parsing
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter)
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log(`server live ${port} `);
    })
}
StartServer();