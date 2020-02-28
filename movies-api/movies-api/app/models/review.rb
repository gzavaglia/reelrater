class Review < ApplicationRecord
    belongs_to :movie

    validates :name, presence: true
    validates :stars, :inclusion => 0..5

end
