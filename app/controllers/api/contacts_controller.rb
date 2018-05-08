class Api::ContactsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @contacts = @user.contacts
        render json: {
          contacts: @contacts
        }
      end
    
      def show
        @contact = Contact.find(params[:id])
        render json: {
          contact: @contact
        }
      end
    
      def create
        @user = User.find(params[:user_id])
        @contact = @user.contacts.create(contact_params)
        render json: {
          contact: @contact
        }
      end
    
      def update
        @user = User.find(params[:user_id])
        @contact = @user.contacts.find(params[:id])
        @contact.update!(contact_params)
        render json: {
          contact: @contact
        }
      end
    
      def destroy
        Contact.find(params[:id]).destroy
    
        render json: {
          message: "Contact successfully destroyed!"
        }
      end
    
      private
    
      def contact_params
        params.require(:contact).permit(:name, :email, :phone, :address, :relationship)
      end

end
