
import { Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import { connect } from 'react-redux';


function User(props) {



	return (
		<div>
        <Container>
        <Row>
        {props.users.map((item, index) => {
            return (
               <UserCard
               key={index}
               userInfo={item}
               deleteUser={props.deleteUser}
               editUser={props.editUser}
               />
            );
          })}
          </Row>
          </Container>
		</div>
	);
}

const mapState = (state) => {
	return {
		users: state.users,
	};
};
 export default connect(mapState)(User);

