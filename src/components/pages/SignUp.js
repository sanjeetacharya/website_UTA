import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './SignUp.css';
import '../../App.css';


export default function SignUp(){
				return (

			<div className="container">
				<div className="row">
					<div className="col-sm-3 returnHome">
						<Link to="/" className="link"><i class="fas fa-backspace"></i> Return Home</Link>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center registerText">
						<h3>Register to become a new user</h3>
						<p>Already have an account? <Link to="/login" className="link">Log In</Link></p>
					</div>
				</div>

				<div className="row">
					<div className="col-10 offset-1 text-center">
						<form noValidate onSubmit={this.onSubmit}>
							{/* Name */}
							<div className="col-8 offset-2">
								<label htmlFor="name">Name:</label>
								
								<input
									type="text"
									onChange={this.onChange}
									value={this.state.name}
									
									id="name"
									
									placeholder="Enter your name..."
								/>
							</div>

							{/* Email */}
							<div className="col-8 offset-2">
								<label htmlFor="email">Email:</label>
								
								<input
									type="email"
									onChange={this.onChange}
									value={this.state.email}
									
									id="email"
									
									placeholder="Enter your email..."
								/>
							</div>

							{/* Password */}
							<div className="col-8 offset-2">
								<label htmlFor="password">Password:</label>
								
								<input
									type="password"
									onChange={this.onChange}
									value={this.state.password}
									
									id="password"
									
									placeholder="Enter a password..."
								/>
							</div>

							{/* Validate password */}
							<div className="col-8 offset-2">
								<label htmlFor="password2">Confirm Password:</label>
								
								<input
									type="password"
									onChange={this.onChange}
									value={this.state.password2}
									
									id="password2"
									
									placeholder="Re-type your password..."
								/>
							</div>

							
						</form>
					</div>
				</div>
			</div>
		);
	}




