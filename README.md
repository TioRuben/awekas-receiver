# Awekas Receiver [![Docker build](https://github.com/TioRuben/awekas-receiver/actions/workflows/docker-build.yml/badge.svg)](https://github.com/TioRuben/awekas-receiver/actions/workflows/docker-build.yml)

## Work in progress

Receive weather information from Bresser WiFi weather stations in Awekas format and write in to InfluxDB

## Environment Variables

 - PORT: HTTP Port to serve API. Default: 3000,
 - NODE_ENV: NODE_ENV variable. Default: "development",
 - INFLUX_URL: URL of the Influx Database. Default: "http://localhost:8086",
 - INFLUX_TOKEN: API Token of the Influx database. Default: "",
 - INFLUX_ORG: Organization ID of the Influx database. Default: "",
 - INFLUX_BUCKET: Bucket name of the Influx database. Default: "test",
 - RATE_LIMIT_MAX_REQUESTS: Rate limit for starting request throttling. Default: 100,
 - RATE_LIMIT_WINDOW_MINUTES: Time window in minutes to count requests for throttling. Default: 1,
 - RATE_LIMIT_DELAY_SECONDS: Delay in seconds for a throttled request. Default: 2,
 - HASH_SALT: Salt to use in password hashing. Default: "awekas",
 - ENABLED_USERS: A comma separated list of users enabled to publish. Default: "TORRE01",
