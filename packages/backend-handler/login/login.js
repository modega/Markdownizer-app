const MongoClient = require('mongodb').MongoClient;

/*
    args.username = username
    args.password = password //Hashed
*/
async function main(args) {
    
    const uri = process.env['DATABASE_URL'];
    let client = new MongoClient(uri);

    try {
        await client.connect();
        const result = await client.db("Markdownizer").collection("Users").findOne({username: args.username, password: args.password});
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