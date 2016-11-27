import ParksService from '../parks';
import Conditions from './conditions';

class DiscourseHandler {
  handle(r) {
    const c = new Conditions(r.intents, r.entities);
    const h = new Handlers(c,r).initContext();

    switch (c.intent.intent) {
      case 'listparks':
        return h.listParks().response();
      case 'tellmeabout':
        return h.tellMeAbout().response();
      default:
        return h.response();
    }
  }
}

class Handlers {
  constructor(conditions, response) {
    this._c = conditions;
    this._r = response;
  }

  listParks() {
    return this;
  }

  tellMeAbout() {
    const park = this._c.findEntity('NationalParks');
    if (park) {
      this._r.context.park = ParksService.byName(park.value);
    }
    return this;
  }

  initContext() {
    // Seed 'context' with the list of known Nation Parks
    if (!this._r.context.parks || this._r.context.parks.length === 0) {
      this._r.context.parks = ParksService.all().map(p => p.name);
    }

    // Seed 'context with mentioned park
    const park = this._c.findEntity('NationalParks');
    if (park) {
      if (!this._r.context.park || !this._r.context.parks.includes(park.name)) {
        this._r.context.park = ParksService.byName(park.value);
      }
    }
    return this;
  }

  response() {
    return this._r;
  }
}


export default new DiscourseHandler();