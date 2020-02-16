class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :fname
      t.string :lname
      t.string :city

      t.timestamps
    end
  end
end
