class ChangePhoneToBeStringInContacts < ActiveRecord::Migration[5.1]
  def change
    change_column :contacts, :phone, :string
  end
end
