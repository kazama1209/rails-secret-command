Rails.application.routes.draw do
  root "home#index"
  resources :secret_pages, only: %i[index]
end
