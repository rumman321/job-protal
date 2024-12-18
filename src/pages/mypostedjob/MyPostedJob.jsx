import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h2>my posted jobs {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>DeadLine</th>
              <th>applicant</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs?.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
               <Link to={`/viewapplication/${job._id}`}>
               <td className="btn btn-link">view Application</td>
               </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
