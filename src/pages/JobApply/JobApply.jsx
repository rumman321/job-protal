import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../../hooks/UseAuth";

const JobApply = () => {
    const {id}=useParams()
    const {user}=useAuth()
    const navigate=useNavigate()
    console.log(id, user)
    const handleJobApply=(e)=>{
        e.preventDefault()
        const form=e.target
        const linkedIn=form.linkedIn.value
        const github=form.github.value
        const resume=form.resume.value
        const jobApplication={
            job_id:id,
            applicant_email:user.email,
            linkedIn,
            github,
            resume,
            
        }
        fetch(`http://localhost:5000/job-application`,{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/myapplications')
            }
        })
    }

    
  return (
    
         
          <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form className="card-body" onSubmit={handleJobApply}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input
                  type="url"
                  name="linkedIn"
                  placeholder="LinkedIn URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input
                  type="url"
                  name="github"
                  placeholder="github URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input
                  type="url"
                  name="resume"
                  placeholder="Resume URL"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
       
  );
};

export default JobApply;
