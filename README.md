# README

## users テーブル

| Column              | Type    | Options                  |
| ------------------- | ------- | ------------------------ |
| id                  | integer | null: false,unique: true |
| nickname            | string  | null: false              |
| email               | string  | null: false              |
| encrypted_password  | string  | null:false               |
| last_name           | string  | null:false               |
| first_name          | string  | null:false               |
| last_name_kana      | string  | null:false               |
| first_name_kana     | string  | null:false               |
| birthday            | date    | null:false               |

### Association
has_many :items
has_many :orders


##  items テーブル
| Column              | Type       | Options                  |
| ------------------- | ---------- | ------------------------ |
| id                  | integer    | null: false,unique: true |
| user_id             | references | foreign_key: true        |
| name                | string     | null:false,index:true    |
| description         | text       | null:false               |
| category_id         | integer    | null:false               |
| item_status_id      | integer    | null:false               |
| shipping_cost_id    | integer    | null:false               |
| prefecture_id       | integer    | null:false               |
| shipping_data_id    | integer    | null:false               |
| price               | integer    | null:false               |

### Association
belongs_to :user
has_one :order



##  orders テーブル
| Column              | Type        | Options                       |
| ------------------- | ----------- | ----------------------------- |
|  id                 | integer     | null: false,unique: true      |
| user_id             | references  | null:false foreign_key: true  |
| item_id             | references  | null:false foreign_key: true  |

### Association
belongs_to :user
belongs_to :item
has_one :payment



##  payments テーブル
| Column              | Type       | Options                        |
| ------------------- | ---------- | ------------------------------ |
| id                  | integer    | null: false,unique: true       |
| order_id            | references | null:false foreign_key: true   |
| postcode            | integer    | null:false                     |
| prefecture_id       | integer    | null:false                     |
| city                | string     | null:false                     |
| block               | string     | null:false                     |
| building            | string     | null:false                     |
| pphone_number       | integer    | null:false                     |

### Association
belongs_to :order

