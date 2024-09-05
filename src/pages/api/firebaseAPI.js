import {auth,db,app} from '../../../firebase.js';



// this will need to be modified based on how many collections and documents are needed
// to go through and parameter data 
// async function addData(collection, document, {data}){
//     // get whatever collection is needed(will specify in firebase(example would be users in firebase)
//     const usersRef = collection(db,collection);
//     // set a doc in the usersRef collection, we use the document to specify which doc to modify/ add
//     const data = await setDoc(doc(usersRef, document), {
//     // this doc will have the parameter data, name aum age 81
//         name: "aum",
//         age: 81,
//     });
//     return data;
// }

    // this function is not yet tested and functional
// async function getData(collection, document){
//     // get collection name example users in firebase 
//     // try to retrieve data
//     try{
//         // get document reference
//         // db is our firebase variable, collection ref is our collection and
//         // document is the doc we are trying to retrieve from firebase,
//         // such as in the "users" collection we have document "aum"
//         // get doc reference
//         const docRef = doc(db, collection, document);
//         // get the snapshot of data from the reference
//         const docSnap = getDoc(docRef);
//         // get the actual data from snapshot
//         let data = (await docSnap).data
//         return data;
//     }catch(error){
//         // log any error caught 
//         console.log(error);
//     }
// }

const handleUserCreation = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // User created and get user info
        const user = userCredential.user;
        
        return user;
    })
    .catch((error) => {
        // Handle errors here
        console.error('Error creating user:', error.message);
    });

}


const loginUser = (email, password) => {
    // check authentication in firebase
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in, so get user information/credentials
        const user = userCredential.user;
        return user;
    })
    .catch((error) => {
        // print error message from firebase
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export {loginUser, handleUserCreation};