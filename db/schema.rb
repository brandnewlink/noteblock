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

ActiveRecord::Schema.define(version: 20140211062204) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "note_transactions", force: true do |t|
    t.integer  "note_id"
    t.string   "tx_hash"
    t.integer  "satoshis"
    t.string   "tx_type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "note_transactions", ["tx_hash"], name: "index_note_transactions_on_tx_hash", using: :btree

  create_table "notes", force: true do |t|
    t.string   "content"
    t.string   "sender"
    t.string   "email"
    t.string   "address"
    t.string   "encrypted_token"
    t.string   "encrypted_private_key"
    t.boolean  "flagged",               default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "notes", ["address"], name: "index_notes_on_address", using: :btree
  add_index "notes", ["content"], name: "index_notes_on_content", using: :btree
  add_index "notes", ["email"], name: "index_notes_on_email", using: :btree
  add_index "notes", ["encrypted_token"], name: "index_notes_on_encrypted_token", using: :btree
  add_index "notes", ["sender"], name: "index_notes_on_sender", using: :btree

end
