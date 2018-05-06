class Api::UsersController < ApplicationController
    def index
        @users = User.all
        render json: {
            users: @users
        }
      end
    
      def create
        @user = User.create!(user_params)
    
        render json: @users
      end
    
      def show
        @user = User.find(params[:id])
        @contacts = @user.contacts
    
        render json: {
            user: @user,
            contacts: @contacts
        }
      end
    
      def update
        @user = User.find(params[:id])
        @user.update!(user_params)
    
        render json: @user
      end
    
      def destroy
        @user = User.find(params[:id]).delete
    
        render status: :ok
      end
    
      private
    
      def user_params
        params.require(:user).permit(:name, :photo_url, :email, :phone)
      end

end
