# NURA is An Application Boilerplate with Nuxt 3, Rails 7, and Docker 

This project will assembly all that you need to start a new, modern, multi app compatibility and scable web application using 
[Nuxt 3](https://nuxt.com/docs/getting-started/introduction) on the 
front end, and [Rails 7](https://rubyonrails.org/) in API mode as the back end.

We'll use docker not only to run our rails server, nuxt server, and postgres database, 
but also set up all foundamental environments needed for run an web application.

PLease enjoy, share and feel free to contribute for this project. 

## How to help us ?

Check issues, make a FORK, TEST, DOCUMENT it and PULL REQUEST .

## My settings:

- Debian on WSL2 Win10;
```bash
wsl --install -d Debian
```

- Set up SSH Ed25519 Key

Generating Ed25519 Key

```bash
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/id_ed25519 -C "KEY-NAME"

-o : Save the private-key using the new OpenSSH format rather than the PEM format. Actually, this option is implied when you specify the key type as ed25519.
-a: It’s the numbers of KDF (Key Derivation Function) rounds. Higher numbers result in slower passphrase verification, increasing the resistance to brute-force password cracking should the private-key be stolen.
-t: Specifies the type of key to create, in our case the Ed25519.
-f: Specify the filename of the generated key file. If you want it to be discovered automatically by the SSH agent, it must be stored in the default `.ssh` directory within your home directory.
-C: An option to specify a comment. It’s purely informational and can be anything. But it’s usually filled with <login>@<hostname> who generated the key.


```

Adding Your Key to SSH Agent

```bash
eval "$(ssh-agent -s)"
```

Then run the following command to add your newly generated Ed25519 key to SSH agent:
```bash
ssh-add ~/.ssh/id_ed25519
```

Copy ssh id_ed25519.pub
```bash
cat ~/.ssh/id_ed25519.pub
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
7. [Upgrade Your SSH Key to Ed25519](https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54)
8. [vee-validate v4 + vuetify 3 + Nuxt 3](https://stackblitz.com/edit/vee-validate-v4-vuetify?file=src%2FApp.vue,src%2Fcomponents%2FTextFieldWithValidation.vue)
9. [Nuxt 3 JWT authentication using $fetch and Pinia](https://stackoverflow.com/questions/73398610/nuxt-3-jwt-authentication-using-fetch-and-pinia)
10. [Install Docker on Debian](https://docs.docker.com/engine/install/debian/)
