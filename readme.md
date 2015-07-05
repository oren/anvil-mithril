# anvil-mithril

Example for a mithril app that uses Anvil connect for authentication

## Prerequisites

* [docker](https://docs.docker.com/installation/mac)
* [docker compose](https://docs.docker.com/compose/install)

## Setup
    bower install
    docker-compose up
    docker-compose run app npm install
    open http://localhost:3000

## Register the app with Anvil

    curl -X POST https://connect.anvil.io/register -H 'Content-Type: application/json' -d '{"redirect_uris": ["http://connect.anvil.io:3001/callback"], "client_name": "Mithril App"}' -k


