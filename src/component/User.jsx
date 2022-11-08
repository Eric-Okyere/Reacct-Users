
import { Container, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";


function User(props) {

  const  users  = useSelector((state) => {
		return state.UsersReducer.users
	});

	return (
		<div >
        <Container className='voc'>
        <Row>
        {users.map((item, index) => {
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


 export default User;

