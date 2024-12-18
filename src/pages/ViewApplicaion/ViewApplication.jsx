import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();
  const handleStatusUpdate=(e,id)=>{
    console.log(e.target.value,id)
    const data={
        status:e.target.value
    }
    fetch(`http://localhost:5000/job-application/${id}`,
        {
            method:'PATCH',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        }
    ).then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "status has been updated",
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                
                                  
                            }
    })
  }
  return (
    <div>
      <h3 className="">application for this job :{applications.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>applicant_email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications?.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant_email}</td>
                <td>
                  <select
                  onChange={(e)=>handleStatusUpdate(e,application._id)}
                  defaultValue={application.status || ""}
                  className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled value="">
                      Change status
                    </option>
                    <option>Under Review</option>
                    <option>Selected</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
