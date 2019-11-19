import Firebase from "firebase";



const {firebaseConfig}= {};



Firebase.initializeApp(firebaseConfig);

const getInstance = () => {
	return Firebase;
};

export const sendNotification = (title, message) => {
	getInstance()
		.firestore()
		.collection("notifications")
		.add({
			date: Date(),
			title,
			description: message
		})
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
			alert("Message was sent to all users");
		})

		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
};

export const makeAdmin = email => {
	let addAdmin = getInstance()
		.functions()
		.httpsCallable("makeAdmin");
	addAdmin({ email })
		.then(msg => console.log(msg))
		.catch(err => console.error(err));
};

export const signInWithEmailAndPassword = (email, password) => {
	getInstance()
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(error => {
			console.error("Error signing in:", error.code, " - ", error.message);
		});
};

export const authStateChange = fnc => {
	getInstance()
		.auth()
		.onAuthStateChanged(function(user) {
			if (user) {
				fnc(true);
				console.log("Signed in");
			} else {
				fnc(false);
				console.log("No auth");
			}
		});
};

export const checkAdmin = async () => {
	getInstance().auth().onAuthStateChanged((user) => {
    if(user){
      user.getIdTokenResult().then(idTokenResult => {
        console.log(idTokenResult.claims.admin);
        return idTokenResult.claims.admin;
      })
    }})
  return false;
};

export const signOut = () => {
	getInstance()
		.auth()
		.signOut()
		.then(() => {
			console.log("Signed Out");
		})
		.catch(error => {
			console.error(error);
		});
};

export default getInstance();
