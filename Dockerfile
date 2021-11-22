FROM node:alpine
WORKDIR /app
COPY dist .
COPY package.json .
COPY yarn.lock .
RUN yarn install --production=true --frozen-lockfile
USER node
CMD ["node", "index.js"]