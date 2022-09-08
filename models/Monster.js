import mongoose, { Schema, model } from "mongoose";

const ActionSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
});

const monsterSchema = new Schema({
  UUID: { type: String, required: true, maxLength: 36 },
  name: {
    type: String,
    required: true,
    maxLength: 70,
  },
  size: {
    type: String,
    required: true,
    maxLength: 15,
  },
  type: {
    type: String,
    maxLength: 20,
  },
  alignment: {
    type: String,
    maxLength: 20,
  },
  armor_class: {
    type: Number,
    required: true,
  },
  armor_description: {
    type: String,
    maxLength: 25,
  },
  hit_points: {
    type: Number,
    required: true,
  },
  hit_dice: {
    type: String,
    maxLength: 10,
  },
  speed: {
    type: Map,
    of: Number,
    required: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  dexterity: {
    type: Number,
    required: true,
  },
  constitution: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
  wisdom: {
    type: Number,
    required: true,
  },
  charisma: {
    type: Number,
    required: true,
  },
  strength_save: {
    type: Number,
  },
  dexterity_save: {
    type: Number,
  },
  constitution_save: {
    type: Number,
  },
  intelligence_save: {
    type: Number,
  },
  wisdom_save: {
    type: Number,
  },
  charisma_save: {
    type: Number,
  },
  challenge_rating: {
    type: Number,
    required: true,
  },
  skills: {
    type: Map,
    of: Number,
  },
  senses: {
    type: String,
    maxLength: 200,
  },
  languages: {
    type: String,
    maxLength: 300,
  },
  damage_vulnerabilities: {
    type: String,
    maxLength: 300,
  },
  damage_resistances: {
    type: String,
  },
  damage_immunities: {
    type: String,
  },
  condition_immunities: {
    type: String,
  },
  actions: {
    type: [ActionSchema],
    required: true,
  },
  reactions: [ActionSchema],
  legendary_actions: [ActionSchema],
  special_abilities: [ActionSchema],
});

const Monster = mongoose.models.Monster || model("Monster", monsterSchema);

export default Monster;
