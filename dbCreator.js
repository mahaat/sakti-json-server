var fs = require('fs');

var dbName = JSON.parse(fs.readFileSync('dbName.json', 'utf8'));

console.log(dbName)

var allDb = {}

var itemsProcessed = 0;

dbName.forEach((item, index, array) => {
    var db = JSON.parse(fs.readFileSync( 'db/' + item + '.json', 'utf-8'))
    Object.assign(allDb, db)
    itemsProcessed++;
    if(itemsProcessed === array.length) {
        // console.log(allDb)
        fs.writeFileSync('db.json', JSON.stringify(allDb, null, 2), 'utf-8')
    }
});



