// Creating the attendee object with the given properties
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Function to log the name of the attendee
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Function to log the ticket price of the attendee
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Function to update the ticket type of the attendee
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Function to update the ticket price of the attendee
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Function to remove the event property from the attendee object
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Function to add a checkedIn property to the attendee object
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};
