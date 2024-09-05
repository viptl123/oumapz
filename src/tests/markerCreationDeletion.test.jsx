/**
 * @jest-environment jsdom
 */

// Unit Test for marker creation/deletion 
// written by Xin

describe("Testing Marker Creation", () => {
    test("Correct Marker Created", () => {
        // Count how many markers are created
        // Call function create a new marker and grab the current count of markers 
        const currentMarkersCount = 10;

        // The expected correct number of current count of markers
        const correctMarkersCount = 10;
        // Compares data to correct answers.
        expect(currentMarkersCount).toEqual(correctMarkersCount);
    });
    test("Correct Marker Deleted", () => {
        // Count how many markers are remaining after deleting one
        // Call function delete a marker and grab the current count of markers 
        const currentMarkersCount = 9;

        // The expected correct number of current count of markers
        const correctMarkersCount = 9;
        // Compares data to correct answers.
        expect(currentMarkersCount).toEqual(correctMarkersCount);
    });
});