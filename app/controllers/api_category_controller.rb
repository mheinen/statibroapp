class ApiCategoryController < ApplicationController

  def get_all
    render json: Category.all
  end

end
