import React from "react";
import {connect } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ users, children }) {


	if (!users) return <Navigate to="/signin" replace={true} />;

	return children;
}

const mapStateToProps = (state) => {
	return {
		users: state.authReducer.authUsers,
	};
};
export default connect(mapStateToProps)(ProtectedRoute);