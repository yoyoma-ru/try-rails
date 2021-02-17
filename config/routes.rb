Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :memos, only: [:index, :create, :destroy, :edit]
  resources :notes, only: [:index, :create, :destroy]

  get'/scrolls/' => 'scrolls#index'
  get'/scroll/example1' => 'scrolls#example1'
  get'/scroll/example2' => 'scrolls#example2'
  get'/scroll/example3' => 'scrolls#example3'
  get'/scroll/example4' => 'scrolls#example4'
  get'/scroll/example5' => 'scrolls#example5'
  get'/scroll/example6' => 'scrolls#example6'
end
