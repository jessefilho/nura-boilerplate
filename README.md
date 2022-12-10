# NURA is An Application Boilerplate with Nuxt 3, Rails 7, and Docker 

This project will assembly all that you need to start a new, modern, multi app compatibility and scable web application using 
[Nuxt 3](https://nuxt.com/docs/getting-started/introduction) on the 
front end, and [Rails 7](https://rubyonrails.org/) in API mode as the back end.

We'll use docker not only to run our rails server, nuxt server, and postgres database, 
but also set up all foundamental environments needed for run an web application.

PLease enjoy, share and feel free to contribute for this project. 

## How to help us ?

Check issues, make a FORK, TEST, DOCUMENT it and PULL REQUEST .

## My setting:

Debian on WSL2 Win10;
```bash
wsl --install -d Debian
```


## Prerequisites

* Github

* Docker
* NVM ( Node v18 LTS (npm v9 ) )
* RVM
* Ruby on Rails 
* Nuxt 3 
* PostgreSQL


## Step-by-step

### Step 1: docker-compose

It is our maestro, so let's do it orchestrate .
- 1.1 Introdution 
- 1.2 Basic review over docker syntax
- 1.3 docker-compose examplained
- 1.4 Set up [phusionpassenger](https://www.phusionpassenger.com/docs/tutorials/what_is_passenger/) in docker-compose
- 1.4.1 Why use phusionpassenger as web application server
- 1.4.2 Set up [Nginx](https://nginx.org/en/docs/)
- 1.4.3 Why use Nginx as HTTP and reverse proxy server
- 1.4.4 Phusion Passenger and Nginx Integration
- 1.5 Set up Node with NVM
- 1.6 Set up Ruby with RVM
- 1.7 Run it

### Step 2: Nuxt 3 as a front end and basic settings
- 2.1 Introdution
- 2.2 Install NVM

- 2.n Set up nuxt.config.js
- 2.n Set up Jest

### Step 3: Rails 7 as back end and basic settings
- 3.1 Introdution
- 3.n Set up Capistrano


## What's next ?

- Hosting
- Set up NFTable into an cloud instance
- Nuxt 3 and Rails 7 with Devise + Omniauth.  Full Authentication boilerplate project. (Coming soon)
- Learn pentest
- Upgrading PostgreSQL cluster version
- CI/CD homemake project
- Upgrading Node / Nuxt
- Upgrading Ruby / Rails

## Bug and Heroes

## References, sources and thanks

1. Genesis - It was not a fork from there but a new fresh start. Thanks [@zacharyw](https://github.com/zacharyw)
https://github.com/zacharyw/nuxt-rails-docker-boilerplate

2. [How to use Vuetify with Nuxt 3](https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html)
3. [Intro to Nuxt 3 VeeValidate Form Validation to Your Nuxt 3 / Vue.js 3 Project](https://www.youtube.com/watch?v=QMlsuYcOoVI) Video-Youtube
4. [how to use vuetify 3 alpha in new nuxt 3 #1183](https://github.com/nuxt/framework/discussions/1183)
5. [How to use Vuetify with Nuxt 3](https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html)
6. [Install WSL with specific distro](https://pureinfotech.com/install-windows-subsystem-linux-2-windows-10/)

