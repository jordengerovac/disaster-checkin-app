Rails.application.routes.draw do
  root 'home#index'

  get 'find' => 'pages#find', as: 'find'

  get 'new' => 'pages#new', as: 'new'

  get 'about' => 'pages#about', as: 'about'

  get 'status' => 'pages#status', as: 'status'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
  	namespace :v1 do
  		resources :persons, only: [:index, :create, :destroy, :update]
  	end
  end
end
