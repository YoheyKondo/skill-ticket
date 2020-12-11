Rails.application.routes.draw do
  get 'privacypolicy', to: 'privacypolicy#index'
  get 'steachers', to: 'steachers#index'
  get 'myclass', to: 'myclasses#index'
  devise_for :users
  get 'search', to: 'searches#index'
  get 'result', to: 'searches#search'
  get 'about', to: 'abouts#index'
  get '/' ,to:'tops#index'
  #root 'tops#index'
  #resource :tops
end
