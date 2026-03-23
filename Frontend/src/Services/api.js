const API_URL = "https://treatment-backend-it5o.onrender.com/api";

export const getReports = async () => {
  const res = await fetch(`${API_URL}/reports`);
  return res.json();
};

export const submitReport = async (data) => {
  await fetch(`${API_URL}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};


export const submitPatientIssue = async(data)=>{

await fetch(`${API_URL}/patient/submitIssue`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

};

export const submitDoctorRecommendation = async(data)=>{

await fetch(`${API_URL}/doctor/recommend`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

};
export const getAIRecommendation = async(disease)=>{

const res = await fetch(
`https://treatment-backend-it5o.onrender.com/api/ai/recommend/${disease}`
);

return res.json();

};