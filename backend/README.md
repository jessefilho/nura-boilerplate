# Nura backend

This backend is developed in :
Rails 7.0.4.3
Ruby ruby-3.2.0
devise 4.9.0
devise-api 0.1.1



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
