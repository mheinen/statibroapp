Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope '/api' do
    scope '/category' do
      get '/getAll' => 'api_category#get_all'
    end
    scope '/tasks' do
        get '/getTasks/:category_id' => 'api_task#get_tasks'
    end
  end
  match "*path" => redirect('/'), via: [:get, :post]
end
