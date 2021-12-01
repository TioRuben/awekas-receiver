FROM node:17-alpine
MAINTAINER Rubén Hernández Vicente <contacto@rubenhernandez.es>
LABEL org.label-schema.name="awekas-receiver" \
        org.label-schema.vendor="TioRuben" \
        org.label-schema.description="Awekas receiver for Bresser weather stations to publish data on Influx DB" \
        org.label-schema.vcs-url="https://github.com/TioRuben/awekas-receiver" \
        org.label-schema.license="MIT"
WORKDIR /app
COPY dist .
COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true --frozen-lockfile
USER node
CMD ["node", "index.js"]
