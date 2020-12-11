class CreateTeachers < ActiveRecord::Migration[6.0]
  def change
    create_table :teachers do |t|
      t.integer :teacher_id
      t.text :name

      t.timestamps
    end
  end
end
