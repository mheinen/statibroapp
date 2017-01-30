class ApiCategoryController < ApplicationController
  before_action :authenticate_user!
  def get_all
    render json: Category.all
  end

end
