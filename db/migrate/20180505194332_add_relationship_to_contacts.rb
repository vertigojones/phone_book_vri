class AddRelationshipToContacts < ActiveRecord::Migration[5.1]
  def change
    add_column :contacts, :relationship, :string
  end
end
