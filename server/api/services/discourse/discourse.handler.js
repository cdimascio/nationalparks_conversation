import ParksService from '../parks';

export default function discourseHandler(r) {
  updateContext(r);
  if (r.intents.length === 0) {
    return r;
  }

  switch (r.intents[0].intent) {
    case 'tellmeabout':
      return tellMeAboutHandler(r);
    default:
      return r;
  }
}

function tellMeAboutHandler(r) {
  const park = r.context.park;
  if (park) {
    // include park data in the response
    r.output.park = ParksService.byName(park);
  }
  return r;
}

function updateContext(r) {
  // Seed 'context' with the list of known Nation Parks
  if (r.context.system.dialog_turn_counter === 1) {
    r.context.parks = ParksService.all().map(p => p.name);
  }

  // Seed 'context with mentioned park
  const park = r.entities.find(e => e.entity === 'NationalParks');
  if (park) {
    r.context.park = park.value;
  }
  return r;
}