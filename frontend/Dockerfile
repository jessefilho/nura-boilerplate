FROM node:18.12.1-bullseye as build
MAINTAINER Jesse Ferreira Filho jessefilhojfnf@gmail.com

### Env Variables
# Use to set inDev variable
ENV NODE_ENV=production
# IP/DNS of host, on docker open for docker network
ENV NUXT_HOST=0.0.0.0
# App port
ENV NUXT_PORT=8080
# Url of API
ENV API_URL=0.0.0.0:3000/

# create destination directory
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# install node package in production mode
RUN npm install --production
RUN npm run build

COPY "/.nuxt/dist" .

EXPOSE 8080



CMD ["node", ".output/server/index.mjs"]

# Tuto https://dev.to/zalexander/how-to-dockerize-the-nuxt3-beta-on-aws-2964
# docker build -t <application name> .

