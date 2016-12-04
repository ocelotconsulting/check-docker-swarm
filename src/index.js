'use strict'

const swarm = require('./docker/swarm.js')
const service = require('./docker/service.js')
const program = require('commander')

program
  .version('0.0.1')
  .command('swarm <swarm-id>')
  .option('-d, --dockeruri <docker-uri:port>', 'The uri for connecting to the docker api')
  .action(swarm)

program
  .command('service <swarm-id> <service-name>')
  .option('-d, --dockeruri <docker-uri:port>', 'The uri for connecting to the docker api')
  .action(service)

program.parse(process.argv)
