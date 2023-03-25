FROM node:18.12.1-bullseye as build
MAINTAINER Jesse Ferreira Filho jessefilhojfnf@gmail.com

# create destination directory
WORKDIR /app

COPY .nuxt/dist ./dist
COPY .output ./.output

# install node package in production mode
#RUN npm i -g npm@9.3.1
#RUN npm run build

# create destination directory
WORKDIR /app

COPY .nuxt/dist ./dist
COPY .output ./.output

# install node package in production mode
#RUN npm i -g npm@9.3.1
#RUN npm run build

CMD ["node", ".output/server/index.mjs"]

# Tuto https://dev.to/zalexander/how-to-dockerize-the-nuxt3-beta-on-aws-2964
# docker build -t <application name> .

