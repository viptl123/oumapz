const { getEventsFromDatabase, event } = require('../Components/Events.js');
// Unit Test for scraper.py

let eventList = [];

getEventsFromDatabase()
  .then(events => {
    // Iterate over the events array
    events.forEach(event => {
        let data = new event(doc.data().location, doc.data().startDate, doc.data().endDate, doc.data().address, doc.data().link, doc.data().description, doc.data().title);
        eventList.push(data);
      console.log(`Title: ${title}`);
    });
  })
  .catch(error => {
    console.error(error);
  });

describe("Scrapping Past Events Test", () => {
    // Tests to see if data is being scraped and converted to JSON correctly.
    test("Finding Latin Dance Club Meeting", () => {
        // Calls function to get data.
        const data = eventList;
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: "Camp Completion",
        }));
    });
});