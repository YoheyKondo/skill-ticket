class CreateLessons < ActiveRecord::Migration[6.0]
  def change
    create_table :lessons do |t|
      t.integer :lesson_id
      t.integer :teacher_id
      t.text :title

      t.timestamps
    end
  end
end
