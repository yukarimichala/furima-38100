class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
         has_many :items
         has_many :orders

         with_options presence: true do
          # 半角英数字（空文字NG）以外の場合には、メッセージを出す
          PASSWORD_REGEX = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]+\z/i.freeze
          validates_format_of :password, with: PASSWORD_REGEX


         validates :nickname, presence: true
         validates :email,    presence: true
        
         
         validates :last_name, format: { with: /\A[ぁ-んァ-ン一-龥]/ }
         validates :first_name, format: { with: /\A[ぁ-んァ-ン一-龥]/ }
         validates :last_name_kana, format: { with: /\A[ァ-ヶー－]+\z/ }
         validates :first_name_kana, format: { with: /\A[ァ-ヶー－]+\z/ }
         validates :birthday,presence: true

         end

  end
