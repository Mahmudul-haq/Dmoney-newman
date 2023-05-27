const newman= require('newman');

newman.run({
    collection:'https://api.postman.com/collections/27447900-ad8287c2-6882-40d5-aa52-5f5a9e895a9d?access_key=PMAT-01H1F7SQBJ98W9BQQ9Q2MEWPY5',
   // environment:require('./collections/env.json'),//ata thakle ata thke data nye report generate krbe r na thakle tkhn default thke dara nibe
    reporters:'htmlextra',
    iterationCount: 1,
    reporter:{
        htmlextra: {
            export: './Reports/report.html',
        }
    }
},function (err) {
    if(err) {throw err;}
    console.log('collection run complete!');
    
});