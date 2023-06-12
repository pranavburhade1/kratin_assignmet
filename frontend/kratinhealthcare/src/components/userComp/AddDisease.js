import React, { useState } from 'react';
import UserServices from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';

export default function AddDisease() {
  const [diseaseName, setDiseaseName] = useState('');
  const [dosage, setDosage] = useState([{ medicineName: '', timeTable: [{ time: '00:00' }] }]);

  const handleMedicineNameChange = (index, value) => {
    const updatedDosage = [...dosage];
    updatedDosage[index].medicineName = value;
    setDosage(updatedDosage);
  };

  const handleTimeChange = (medicineIndex, timeIndex, value) => {
    const updatedDosage = [...dosage];
    updatedDosage[medicineIndex].timeTable[timeIndex].time = value;
    setDosage(updatedDosage);
  };

 const navigate = useNavigate();

  const addMedicine = () => {
    setDosage([...dosage, { medicineName: '', timeTable: [{ time: '00:00' }] }]);
  };

  const addTime = (medicineIndex) => {
    const updatedDosage = [...dosage];
    updatedDosage[medicineIndex].timeTable.push({ time: '00:00' });
    setDosage(updatedDosage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonObject = {
      diseaseName,
      dosage,
    };

    console.log(jsonObject);
    UserServices.adddisease(jsonObject,JSON.parse(localStorage.getItem('userLoged')).id).then((res)=> {
      alert(res.data);
      navigate('/user/home')

    }).catch((err)=> {
      console.log(err);
    })
  };

  return (
    <div className='row' style={{ textAlign: 'center' }}>
      <div className='col-3'></div>
      <div className='col-6'>
        <h1>Add Disease</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='diseaseNameInput' className='form-label'>
              Disease Name
            </label>
            <input
              type='text'
              className='form-control'
              id='diseaseNameInput'
              placeholder='Disease Name'
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
              required
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Medicines</label>
            {dosage.map((medicine, medicineIndex) => (
              <div key={medicineIndex}>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Medicine Name'
                    value={medicine.medicineName}
                    onChange={(e) => handleMedicineNameChange(medicineIndex, e.target.value)}
                    required
                  />
                  <button
                    className='btn btn-outline-secondary'
                    type='button'
                    onClick={() => addTime(medicineIndex)}
                  >
                    Add Time
                  </button>
                </div>
                {medicine.timeTable.map((timeObj, timeIndex) => (
                  <div key={timeIndex} className='input-group mb-3'>
                    <input
                      type='time'
                      className='form-control'
                      value={timeObj.time}
                      onChange={(e) => handleTimeChange(medicineIndex, timeIndex, e.target.value)}
                      required
                    />
                  </div>
                ))}
              </div>
            ))}
            <button className='btn btn-outline-secondary' type='button' onClick={addMedicine}>
              Add Medicine
            </button>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      <div className='
col-3'></div>
</div>
);
}