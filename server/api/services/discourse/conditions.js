export default class Conditions {
  constructor(intents, entities) {
    this._intents = intents;
    this._entities = entities;
  }

  get intent() {
    return this._intents.length > 0
      ? this._intents[0]
      : { intent: null, confidence: 0 };
  }

  get entities() {
    return this._entities;
  }

  findIntent(name) {
    for (const intent of this._intents) {
      if (intent.intent === name) {
        return intent;
      }
    }
    return null;
  }

  findEntity(name) {
    for (const entity of this._entities) {
      if (entity.entity === name) {
        return entity;
      }
    }
    return null;
  }
}