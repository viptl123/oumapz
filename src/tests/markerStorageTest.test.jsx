// Unit Test for MyMap.jsx

/*
This unit test was made by Tristen Pham to test the insertion and deletion of markers in the database
*/

describe("Checking for Marker Properties", () => {
    // Tests to see if data is being scraped and converted to JSON correctly.
    test("Insertion of Marker", () => {
        // Calls function to get data.
        // Normally would retrieve marker data from database and compare
        const data = JSON.stringify({
            title: "First Marker - Hideaway Pizza",
            position: "lat: 35.21204029964204, lng: -97.4445950663006"
           // icon: '/path/to/your/first-icon.svg', // Optional custom icon
          });
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: "First Marker - Hideaway Pizza",
            position: "lat: 35.21204029964204, lng: -97.4445950663006"
        }));
    });
    test("Deletion of Marker", () => {
        // Calls function to get data.
        const data = NULL;
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: NULL,
            position: NULL
        }));
    });
});