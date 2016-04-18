# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160417153846) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "facilities", force: :cascade do |t|
    t.string   "name",         default: ""
    t.string   "displayname",  default: ""
    t.integer  "tofacilityid"
    t.integer  "park_id"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "facilities", ["park_id"], name: "index_facilities_on_park_id", using: :btree

  create_table "locations", force: :cascade do |t|
    t.string   "name",       default: ""
    t.string   "address",    default: ""
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  create_table "parks", force: :cascade do |t|
    t.string   "name",                                 default: ""
    t.string   "address",                              default: ""
    t.string   "postalcode",                           default: ""
    t.string   "imgageurl",                            default: ""
    t.boolean  "cleanliness"
    t.boolean  "welllit"
    t.boolean  "parking"
    t.integer  "toparkid"
    t.integer  "phonenumber"
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
    t.decimal  "lat",         precision: 10, scale: 6
    t.decimal  "lng",         precision: 10, scale: 6
  end

  create_table "parks_users", id: false, force: :cascade do |t|
    t.integer "park_id", null: false
    t.integer "user_id", null: false
    t.integer "rating"
  end

  add_index "parks_users", ["park_id", "user_id"], name: "index_parks_users_on_park_id_and_user_id", using: :btree
  add_index "parks_users", ["user_id", "park_id"], name: "index_parks_users_on_user_id_and_park_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",       default: ""
    t.string   "email",      default: ""
    t.string   "password",   default: ""
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

end
