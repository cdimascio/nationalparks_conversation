const ParksDb = require('../../data/parks.db.json');

class ParksService {
  byName(name) {
    for (let i=0; i < ParksDb.length; i++) {
      if (ParksDb[i].name.toLowerCase() === name.toLowerCase().trim()) {
        return ParksDb[i];
      }
    }
    return null;
  }

  all() {
    return ParksDb;
  }
}

export default new ParksService();