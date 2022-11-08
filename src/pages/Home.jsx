import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import UsersForm from "../component/UsersForm";
import User from "../component/User";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/config";

function Home() {
	const handleClose = () => {
		signOut(auth);
	};
	return (
		<Container>
			<Row>
				<Col>
					<UsersForm
					// newUser={AddNewUser}
					/>
				</Col>

				<Col>
					<User
					// userData={users}
					// deleteUser={deleteUser}
					// editUser={handleEdit}
					/>
				</Col>
				<Button onClick={handleClose} variant="danger">
					Logout
				</Button>
			</Row>
		</Container>
	);
}

export default Home;