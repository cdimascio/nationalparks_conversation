import ParksDatabase from '../parks';

export default function discourseHandler(r) {

  // In this exercise, we will enable a user to get various information about the park
  // he is requesting. In order to do this we must keep track of the park name that
  // the user is talking about. Then, when a user asks for details (#tellmeabout) about
  // that particular park, we must look up the park in the ParksDatabase and provide
  // the full park object in the response payload.
  //
  // We must also store the list of known parks in context, so that the conversation tooling
  // is aware of the known parks list

  // In order to complete this task, here is what you need to do:

  // 1. STORE THE KNOWN PARKS IN CONTEXT
  //    Modify the context object in the response, r to include the 'parks' property.
  //    Set the 'parks' property equal to the array of known park names.
  //    ** Only set the 'parks' property on the first dialog turn.
  //
  //    HINT: You can get the array of parks by calling, ParksDatabase.all()
  //    HINT: You can determine the dialog turn by inspecting the system object
  //    NOTE: ParksDatabase.all() returns a list of park objects, not park names

  // 2. STORE THE PARK NAME THAT THE USER IS CURRENTLY ASKING ABOUT
  //    Examine the entities object in the response, r
  //    If the 'NationalParks' entity is detected, update the context object
  //    to include the property 'park' and set 'park' equal to the value
  //    of the NationalParks entity

  // 3. RETURN THE PARK OBJECT IN THE RESPONSE PAYLOAD
  //    Examine the intents object in the response, r
  //    If the top intent is the 'tellmeabout' intent, then do the following:
  //    - Get the output property from the response, r
  //    - Get the 'park' name from the response's context object
  //    - Create the property, 'park' on the output object and set its value to the park object
  //
  //    HINT: You can get the parks object by calling ParksService.byName(parkName);

  return r;
}
