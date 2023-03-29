class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :authenticate_devise_api_token! , :set_user_current
  # GET api/v1/user
  def show
    render json: @current_user
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user_current
    # Get user from token, the owner of the request
    # @current_user[:first_name] = 'Nura'
    # @current_user[:last_name] = 'Project'
    @current_user = {
      first_name: 'Nura',
      last_name: 'Project'
    }
    @current_user[:email] = current_devise_api_user.email
  end

end
