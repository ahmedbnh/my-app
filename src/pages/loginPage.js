import React, { Component } from "react";
import '../../../my-app/node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function LoginPage() {

        return (

            <div class="container-md">
            <form class="container">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="border border-light p-3 mb-4">
                <div className="text-center">
                <button type="submit" className="btn-primary -row-selected">  Login</button>
                        </div>
                <div className="text-center">
                <a href="/signup">
                <button type="submit" className="btn-primary" >signup</button>
                </a>
                </div>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

            </form>
                </div>
        );

}
