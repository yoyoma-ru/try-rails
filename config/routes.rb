Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :memos, only: [:index, :create, :destroy, :edit]
end
