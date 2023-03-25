# Nura backend

This backend is developed in :
Rails 7.0.4.3
Ruby ruby-3.2.0
devise 4.9.0
devise-api 0.1.1

### Configuration
Open the credentials file from the command line.

`$ EDITOR=nano rails credentials:edit --environment test`

`$ EDITOR=nano rails credentials:edit --environment development`

`$ EDITOR=nano rails credentials:edit --environment staging`

`$ EDITOR=nano rails credentials:edit --environment production`

Database initialization of all databases

`$ rails db:migrate`, then `$ rails db:seed` or attention it 
will drop all database on `databases.yml` 
`$ rake db:drop db:create db:migrate db:seed`

Database reinitialization of all databases

To drop all database: $ rails db:drop , then $ rails db:migrate

To simple reset: `$ rails db:reset`

### Create Rails app

run the follow command into your project
````ruby
rails new backend --api
````
then install gems with
````ruby
bundle install
````
Bundle devise and devide api
````ruby
bundle add devise devise-api
````
Install devise and create the user model
````ruby
rails g devise:install && rails g devise users
````
Also install the devise api tables
````ruby
rails g devise_api:install
````
Uncomment the cors, and, at first moment
make the API accessible for everyone
CAUTION: It needs to be configure according
your project
````ruby
# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # accessible for everyone
    origins "*"

    resource "*",
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
````

Uncomment to the gem and rerun ``bundle install``
````ruby
# backend/Gemfile
gem "rack-cors"
````
At user model, add `:api`
````ruby
# app/models/user.rb
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable, 
         :api
end
````

### Restricting access

To restrict the access to some pages or
endpoints, use:

skip action :
````ruby
skip_before_action :verify_authenticity_token, raise: false
````

only or except configuration
here, only the method `restricted` require
be authenticated
````ruby
before_action :authenticate_devise_api_token!, only:[:restricted]
````

# Migrate

### Generating new migrates
use the command to generate updates on table or new tables

```ruby
rails generate migration TableName colunm_name:type
```
To create table, you can use generate scaffold to be more fast.

exemple:
````ruby
# Create Groups model
rails generate scaffold Group name:string location:string description:string home:string menu:string
# Create Members relationship model
rails generate scaffold Members group_owner:boolean main:boolean 
# Create Roles model
rails generate scaffold Roles name:string
````

### deploy modification
Before run it is necessary apply the devise
tools and table on database , so run:
````ruby
rake db:migrate
````

## Run the server

Use ``rails s`` to run the project

## Devise routes

access ``http://localhost:3000/rails/info/routes``
to check all added method from devise

check the [examples API requests here](https://github.com/nejdetkadir/devise-api#example-api-requests:~:text=Example%20API%20requests)
