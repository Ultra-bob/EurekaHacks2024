const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
    `mongodb+srv://dev:${process.env.MONGO_PASSWORD}@eurekahacksregistration.qthirrb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("registrations").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!",
        );
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

async function addsomething() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db("registrations");
    const collection = db.collection("dev");

    collection.insertOne({
        name: "test",
        email: "",
        grade: 12,
        resumelink: "", 
    });

    // the following code examples can be pasted here...

    return "done.";
}



run().catch(console.dir);
