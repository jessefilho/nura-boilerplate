Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/restricted'
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get '/user', to:'users#show'
end
