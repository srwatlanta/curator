class User < ApplicationRecord
  has_many :videos
  has_many :to_dos
  has_many :flash_cards
end
