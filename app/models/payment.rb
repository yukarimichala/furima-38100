class Payment < ApplicationRecord
  attr_accessor :token
  belongs_to :order
end
