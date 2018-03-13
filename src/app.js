var program = require('commander');

program
    .version('0.1.0')
    .option('-u, --username <username>', 'Github Username(Maybe .. Email)')
    .option('-p, --password <password>', 'Github Password')
    .option('-t, --type <type>','Type', /^(ssh|http)$/i)
    .parse(process.argv);

if(program.username) console.log(` ${program.username} - username`);
if(program.password) console.log(` ${program.password} - password`);
if(program.type) console.log(` ${program.type} - type`);
