class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :address
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
