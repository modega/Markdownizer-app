const MongoClient = require('mongodb').MongoClient;

/*
    args.username = username
    args.password = password //Hashed
    args.email = email
    args.name = name
    args.lastName = lastName
*/
async function main(args) {

    const uri = process.env['DATABASE_URL'];
    let client = new MongoClient(uri);

    try {
        await client.connect();
        const result = await cleint.db("Markdownizer").collection("Users").findOne({email: args.email});
        if(result != null) await client.db("Markdownizer").collection("Users").insertOne({username: args.username, password: args.password, email: args.email, name: args.name, lastName: args.lastName});
        return {
            "body": result != null ? "true" : "false"
        };
    } catch (e) {
        console.error(e);
        return {
            "body": { "error": "There was a problem retrieving data." },
            "statusCode": 400
        };
    } finally {
        await client.close();
    }
}

module.exports.main = main; 