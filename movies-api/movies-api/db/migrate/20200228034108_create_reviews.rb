class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :body
      t.integer :stars
      t.integer :movie_id
      t.timestamps
    end
  end
end
