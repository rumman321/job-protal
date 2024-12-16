import React from "react";
import Swal from "sweetalert2";

const Addjob = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData= new FormData(e.target)
    
    const initialData=Object.fromEntries(formData.entries())
    console.log(initialData)
    const {min,max,currency, ...newJob}= initialData
    console.log(newJob)
    newJob.salaryRange={min,max, currency}
    newJob.requirement=newJob.requirement.split('\n')
    newJob.responsibilities=newJob.responsibilities.split('\n')
    console.log(newJob)

    fetch(`http://localhost:5000/jobs`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newJob)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
          if(data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Job has been Added",
                            showConfirmButton: false,
                            timer: 1500
                          });
        
                          navigate('/myapplications')
                    }
    })
  }
  return (
    <div>
      <h2>post a job here</h2>
      <form className="card-body" onSubmit={handleSubmit}>
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue="" className="select select-bordered w-full ">
            <option value="" disabled >
              job Type?
            </option>
            <option>Full-Time</option>
            <option>Hybrid</option>
            <option>Remote</option>
            <option>Part-Time</option>
          </select>
        </div>
        {/* job Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select defaultValue="" className="select select-bordered w-full ">
            <option value="" disabled >
              job Category?
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
            <option>Data Science</option>
            <option>Part-Time</option>
          </select>
        </div>
        {/* job company */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Description </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            type="text"
            name="description"
            placeholder="description"
          ></textarea>
        </div>

        {/* salary */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="min-salary"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max-salary"
              className="input input-bordered"
              required
            />
          </div>
          {/* currency */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Currency</span>
            </label>
            <select defaultValue="" className="select select-bordered w-full " name="currency">
              <option disabled value="">
                Currency?
              </option>
              <option>BDT</option>
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>
        </div>
        {/* job requirement */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Requirement </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            type="text"
            name="requirement"
            placeholder="Write each requirement a new line"
          ></textarea>
        </div>
        {/* job responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> responsibilities </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            type="text"
            name="responsibilities"
            placeholder=" Write each responsibilities a new line"
          ></textarea>
        </div>
        {/* job Hr Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Hr Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Hr Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* job Hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Hr Email</span>
          </label>
          <input
            type="email"
            name="hremail"
            placeholder="Hr email"
            className="input input-bordered"
            required
          />
        </div>
        {/* company-logo */}
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Company Logo </span>
          </label>
          <input
            type="url"
            name="logourl"
            placeholder="Logo Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addjob;
