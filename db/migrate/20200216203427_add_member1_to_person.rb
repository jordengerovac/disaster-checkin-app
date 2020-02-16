class AddMember1ToPerson < ActiveRecord::Migration[6.0]
  def change
    add_column :people, :member1, :string
  end
end
