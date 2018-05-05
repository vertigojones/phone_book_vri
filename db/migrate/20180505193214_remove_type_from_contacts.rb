class RemoveTypeFromContacts < ActiveRecord::Migration[5.1]
  def change
    remove_column :contacts, :type, :string
  end
end
