# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

demo: https://nura.netlify.app/


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

# Dockerfile

Build Image, it is needed to launch container
```bash 
$ docker build -t nura_frontend:v0.1 . 
```
Rebuild without take in consideration the cache
```bash 
$ docker build --no-cache -t nura_frontend:v0.1 . 
```
Show newly images
```bash 
$ docker images
```
```bash 
$ docker run nura_frontend:v0.1.1
```

Run in detached mode --detach or -d
```bash 
$ docker run -it -d nura_frontend:v0.1.1
```

To delete all containers including its volumes use,
```bash 
$ docker rm -vf $(docker ps -aq)
```

To delete all the images,
```bash
$ docker rmi -f $(docker images -aq)
```

# Git

remove all files from git cache
```bash git rm -r --cached . ```
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Thanks : Pawel Czerwinski
https://unsplash.com/photos/fPN1w7bIuNU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

Thanks :  Milad Fakurian
https://unsplash.com/photos/u8Jn2rzYIps?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

Thanks : razorcx-courses
https://github.com/razorcx-courses/nuxt3-runtime-config-public/blob/master/server/middleware/serverMiddleware.ts
