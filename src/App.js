import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

import {
	collection,
	orderBy,
	query,
	getDocs,
	onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./Firebase/config";
import { addUser } from "./action/userAction";
import { useDispatch } from "react-redux";
import Routing from "./Routing";
import { authUser } from "./action/authActions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		try {
			const readData = async () => {
				const q = query(collection(db, "user"), orderBy("timestamp", "desc"));
				const unsubscribe = await onSnapshot(q, (querySnapshot) => {
					const users = [];
					querySnapshot.forEach((doc) => {
						users.push(doc.data());
					});
					dispatch(addUser(users));
					console.log(users);
				});
			};
			readData();
		} catch (e) {
			console.log(e);
		}
	}, [dispatch]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(authUser(user));
			} else {
				dispatch(authUser(null));
			}
		});
	}, [dispatch]);
	
	// };

	return (
		<>
			<Container>
				<Routing />
				
			</Container>
		</>
	);
}

export default App;