import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method==='POST'){
        const data=req.body;
        const {title,image,description,address}=data;
        const client=await MongoClient.connect('mongodb+srv://saifmohammad:mongo1234@cluster0.9nfvk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db=client.db();
        const meetupscollection=db.collection('meetups');
        const result = await meetupscollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({message:"Meetup inserted!"});
    }
}
export default handler;