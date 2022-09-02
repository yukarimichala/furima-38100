# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions




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


