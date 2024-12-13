import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaSuitcase,
} from "react-icons/fa";
import "daisyui/dist/full.css"; // Ensure DaisyUI CSS is imported

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    jobType,
    category,
    applicationDeadline,
    company,
    company_logo,
    requirements,
    description,
    salaryRange,
    location,
  } = job;

  return (
    <div className="card w-full bg-base-100 shadow-xl mx-auto my-8">
      <div className="flex items-center gap-5 p-4">
        <figure>
          <img
            src={company_logo}
            alt={`${company} Logo`}
            className="w-24 h-24 object-contain"
          />
        </figure>
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="text-sm text-gray-500">
            <FaBuilding className="inline-block mr-2" />
            {company}
          </p>
          <p className="text-sm text-gray-500">
            <FaMapMarkerAlt className="inline-block mr-2" />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <div className="flex items-center">
          <div className="badge badge-info mt-2">
            <FaSuitcase className="mr-1" />
            {jobType}
          </div>
          <div className="badge badge-success mt-2 ml-2">{category}</div>
        </div>
        <p className="mt-4">{description}</p>
        <div>
          <p className="mt-2">
            <strong>Requirements:</strong>{" "}
          </p>
          {requirements.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </div>
        <p className="mt-2">
          <FaMoneyBillWave className="inline-block mr-2" />
          <strong>Salary Range : </strong>
          {salaryRange.min}-{salaryRange.max}
          {salaryRange.currency}
        </p>
        <p className="mt-2">
          <FaCalendarAlt className="inline-block mr-2" />
          <strong>Application Deadline:</strong> {applicationDeadline}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;