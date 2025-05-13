const API_URL = 'http://localhost:5000/api/jobs';

const addJob = async (jobData) => {
  const response = await fetch(`${API_URL}/add-job`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });

  const data = await response.json();
  return data;
};

export default { addJob };
