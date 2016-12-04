# check-docker-swarm

## A nagios monitoring plugin which checks the status of a docker swarm and services.
This toolset will be used by nagios to perform periodic checks of docker swarms and services they are running.

## To Build

    $ npm run build-webpack

## To Use

Prior to installing the plugin in nagios, you can test via a command line. For usage info type:

    $ node dist/check_docker_swarm.js -h

You can also append `-h` to any command for detailed help info on that particular command.

### Commands supported
Currently the additions to CLI include those supporting
* To check the status of a docker swarm

```bash
node dist/check_docker_swarm.js swarm -d <docker-api-uri:port> <swarm-id>
```

* To check the status of a docker swarm's service

```bash
node dist/check_docker_swarm.js service -d <docker-api-uri:port> <swarm-id> <service-name>
```

## Install into nagios server

* Ensure you have node.js installed and accessible via the plugin command line.

* Install the check_docker_swarm.js file as a plugin to be configured into separate commands for swarm and service checking.

## Disclaimer
At this point this project assumes that you have opened the docker sock for insecure http communication (i.e. typically port 2375), future versions will probably incorporate a client certificate for secure communications.
