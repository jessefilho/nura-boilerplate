FROM node:18.12.1-bullseye as build

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apt update && apt upgrade
RUN apt add git


# copy the app, note .dockerignore
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

# Use to set inDev variable
ENV NODE_ENV=production
# IP/DNS of host, on docker open for docker network
ENV NUXT_HOST=0.0.0.0
# App port
ENV NUXT_PORT=8080
# Url of API
ENV API_URL=0.0.0.0:3000/

CMD ["node", ".output/server/index.mjs"]

# Tuto https://dev.to/zalexander/how-to-dockerize-the-nuxt3-beta-on-aws-2964
# docker build -t <application name> .

