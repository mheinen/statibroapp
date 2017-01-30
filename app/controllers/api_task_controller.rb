class ApiTaskController < ApplicationController
  before_action :authenticate_user!
  #"1,3".gsub(',', '.').to_f --> 1.3 float :D
  def get_tasks
    render json: Category.find(params[:category_id]).tasks
  end
end
