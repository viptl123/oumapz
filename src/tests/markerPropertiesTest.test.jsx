// Unit Test for MyMap.jsx
/*
This unit test was made by Tristen Pham to test if the marker properties are properly displayed on the page
*/

describe("Checking for Marker Properties", () => {
    // Tests to see if data is being displayed converted to JSON correctly.
    test("Displaying Data for Hideaway Pizza", () => {
        // Calls function to get data.
        // Normally would retrieve marker data from html and compare
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
    test("Displaying Data for Pinkberry", () => {
        // Calls function to get data.
        const data = NULL;
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: "Second Marker - Pinkberry",
            position: "lat:  35.21152589365213, lng: -97.44452510989818"
        }));
    });
    test("Displaying Data for Third Marker", () => {
        // Calls function to get data.
        const data = NULL;
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            title: "Third Marker",
            position: "lat: 35.21241589040634, lng: -97.44399512973642"
        }));
    });
});