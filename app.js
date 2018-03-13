#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .option('-U, --username <username>', 'Github Username(Maybe .. Email)')
    .option('-P, --password <password>', 'Github Password')
    .option('-L, --log','enable login option')
    .option('-T, --type <type>','Type "ssh" or "http"', /^(ssh|http)$/i)
    .parse(process.argv);

if(program.username) console.log(` ${program.username} - username`);
if(program.password) console.log(` ${program.password} - password`);
if(program.type) console.log(` ${program.type} - type`);
if(program.log) console.log(program.log ? 'log on':'log off');