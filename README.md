# CSTI Tokenizacion de Tarjetas

## Overview
Technical challenge Backend - Tokenización 

## Requirements
1. NodeJS >= 16
2. Redis >= 6

## Getting Started

1. Clone this repository.
2. Run `npm install` to install the project dependencies.
3. Create (or copy `.env.example`) an environment file `.env` and define the environment variable with one valid environment.


## Deploy without docker
1. This project use Redis, must be set your redis environments like this:
```dotenv
REDIS_HOST=your-redis-host
REDIS_PORT=your-redis-port
```
2. To build the app run this command
```shell
npm run build
```
3. To Start the app run this command
```shell
npm run start
```

## Deploy with docker

Run this command:
```shell
docker-compose up -d
```


## Check the api is up

```curl
curl --location http://{your-host}:{you-port}/api/health/check
```

Response:
```json
{
    "message": "OK"
}
```


