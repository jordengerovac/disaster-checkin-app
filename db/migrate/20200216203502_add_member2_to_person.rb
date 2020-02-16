class AddMember2ToPerson < ActiveRecord::Migration[6.0]
  def change
    add_column :people, :member2, :string
  end
end
