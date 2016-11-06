import ParksDb from '../../data/parks.db.json';

class Parks {
  byName(name) {
    for (let i=0; i < ParksDb.length; i++) {
      if (ParksDb[i].name.toLowerCase() === name) {
        return ParksDb[i];
      }
    }
    return null;
  }

  all() {
    return ParksDb;
  }
}