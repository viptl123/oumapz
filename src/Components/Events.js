import { db } from '../../firebase.js';
import { collection, getDocs } from "firebase/firestore";

// Xin Lai, Created a new class to store the event data pulled from database
class event {
    constructor(location, startDate, endDate, address, link, description, title) {
      this.location = String(location);
      this.startDate = String(startDate);
      this.endDate = String(endDate);
      this.address = String(address);
      this.link = String(link);
      this.description = String(description);
      this.title = String(title);
    }
  
    getLocation() {
      return this.location;
    }
  
    getStartDate() {
      return this.startDate;
    }
  
    getEndDate() {
      return this.endDate
    }
  
    getAddress() {
      return this.address;
    }
  
    getLink() {
      return this.link;
    }
  
    getDescription() {
      return this.description;
    }
  
    getTitle() {
      return this.title;
    }
  
    toString() {
      return this.location + ', ' + this.startDate + ', ' + this.endDate + ', ' + this.address + ', ' + this.link + ', ' + this.description + ', ' + this.title;
    }
}

export const getEventsFromDatabase = async () => {
    let events = [];
   
    // Pull the data from the database and create new event objects and add it to the events array
    const querySnapshot = await getDocs(collection(db, "Engage Data"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    let data = new event(doc.data().location, doc.data().startDate, doc.data().endDate, doc.data().address, doc.data().link, doc.data().description, doc.data().title);
    events.push(data);
    // console.log("Hello");
    // console.log(events.toString());
    });
   
    return events;
}