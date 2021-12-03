# Weather API [![Docker build](https://github.com/TioRuben/weather-api/actions/workflows/docker-build.yml/badge.svg)](https://github.com/TioRuben/weather-api/actions/workflows/docker-build.yml)

## Work in progress

Api to retreive weather information from InfluxDB. The weather information comes from [https://github.com/TioRuben/awekas-receiver](https://github.com/TioRuben/awekas-receiver)

By now, only two endpoints provided:

- `/` Gets last weather information
- `/range?start=[date]&end=[date]` Gets a time range

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
- STATION: Station ID to retrieve information,
