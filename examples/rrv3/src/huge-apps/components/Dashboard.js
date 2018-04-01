/*globals COURSES:true */
import React, { Component } from "react";
import { Link } from "@reactions/router/compat";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Super Scalable Apps</h2>
        <p>
          Open the network tab as you navigate. Notice that only the amount of
          your app that is required is actually downloaded as you navigate
          around. Even the route configuration objects are loaded on the fly.
          This way, a new route added deep in your app will not affect the
          initial bundle of your application.
        </p>
        <h2>Courses</h2>{" "}
        <ul>
          {COURSES.map(course => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
