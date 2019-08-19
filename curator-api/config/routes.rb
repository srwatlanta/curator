Rails.application.routes.draw do
  resources :backgrounds
  resources :flash_cards
  resources :to_dos
  resources :videos
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
