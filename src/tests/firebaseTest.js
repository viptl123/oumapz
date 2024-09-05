// Unit tests for firebase function ie: login, create User, read data, write data
import { getData, addData, handleUserCreation, loginUser } from "../pages/api/firebaseAPI";
describe("Testing Firebase Functions", () => {
    // Tests to see if data is being scraped and converted to JSON correctly.
    test("Testing user login", () => {
        // Calls function to get data.
        const data = loginUser();
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            email: "test15@gmail.com",
        }));
    });
    test("Testing creating a user", () => {
        // Calls function to get data.

        const data = handleUserCreation("test17@gmail.com", "123456");
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            email: "test17@gmail.com",
        }));
    });
    test("Testing writing in data from firebase", () => {
        // Calls function to get data.
        const writeData = {
            name: "tristen",
            age: 20,
        }
        const write = addData("users", "tristen", writeData);
        const data = getData();
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            name: "tristen",
            age: "20",
        }));
    });
    test("Testing data reading", () => {
        // Calls function to get data.
        const data = getData("users", "aum");
        // Compares data to correct answers.
        expect(data).toEqual(JSON.stringify({
            name: "aum",
            age: 81,
        }));
    });
});
