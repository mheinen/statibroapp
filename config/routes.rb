Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    scope '/category' do
      get '/getAll' => 'api_category#get_all'
    end
  end
end
