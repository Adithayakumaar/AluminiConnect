import React from 'react';
import JobPostingForm from '../components/JobPostingForm';
import jobService from '../services/jobService';

const JobPostingPage = () => {
  const handleJobPost = async (jobData) => {
    try {
      const response = await jobService.addJob(jobData);
      alert(response.message);  // Show response message (success/error)
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Create a Job Posting</h1>
      <JobPostingForm onSubmit={handleJobPost} />
    </div>
  );
};

export default JobPostingPage;
