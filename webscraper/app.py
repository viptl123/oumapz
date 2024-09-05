from flask import Flask

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from scraper import intialize_scraper


flaskApp = Flask(__name__)


@flaskApp.route("/")
def main():
    cred = credentials.Certificate(
        "/Users/tuannguyen/Desktop/ou-mapz/ou-mapz-markers.json"
    )
    app = firebase_admin.initialize_app(cred)

    db = firestore.client()

    data = intialize_scraper()

    newEntry = 0

    for item in data:
        # Assuming you have a unique field to check for duplicates
        # For example, if you have a 'title' field that should be unique
        query = (
            db.collection("Engage Data")
            .where("title", "==", item["title"])
            .where("startDate", "==", item["startDate"])
            .get()
        )

        # Check if the item has 'location' and 'address' keys
        if "location" in item and "address" in item:
            if not query:
                # If no documents are found with the same 'title', add the item
                db.collection("Engage Data").add(item)
                newEntry += 1
            else:
                print(f"Duplicate item found with title: {item['title']}")
        else:
            print(f"Skipping item with missing location or address: {item['title']}")

    return "Created: " + str(newEntry) + " entries."


if __name__ == "__main__":
    flaskApp.run(port=8000, debug=True)
