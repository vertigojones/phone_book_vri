Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :contacts
    end
  end
end