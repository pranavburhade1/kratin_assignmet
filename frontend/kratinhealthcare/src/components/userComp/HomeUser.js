import { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";

export default function HomeUser() {
  const [arr, setArr] = useState([]);
  const [reminderTime, setReminderTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    UserServices.getAllDisease(JSON.parse(localStorage.getItem('userLoged')).id)
      .then((res) => {
        const temp = res.data;
        console.log(temp);
        setArr(temp);
        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAddReminder = (time, medicineName) => {
    const today = new Date();
    console.log(time);
    setReminderTime({ time: time, medicineName });
  };
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
   
    const formattedHours = hours < 10 ? "0" + hours : hours;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  
    // Construct the time string
    const currentTime = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
  
    return currentTime;
  }

  useEffect(() => {
  
    if (reminderTime) {
    
      
   
         const tm = getCurrentTime()
      
      if (tm === reminderTime.time) {
        alert(`Now take your medicine: ${reminderTime.medicineName}`);
      }
    }
  }, [currentTime, reminderTime]);

  return (
    <div className="row">
      {arr.length === 0 ? (
        <span style={{ color: "red" }}>
          "You have not added any diseases. Please add them first."
        </span>
      ) : (
        ""
      )}
      {arr.map((x, id) => (
        <div className="card col-lg-5 m-5" key={id}>
          <div className="card-body">
            <h5 className="card-title">Disease Name: {x.diseaseName}</h5>
            <hr />
            <div className="row">
              <div className="col-8">
                {x.dosage.map((y, id) => (
                  <div key={id}>
                    <h6 className="card-subtitle m-2 text-muted">
                      Medicine Name: {y.medicineName}
                    </h6>
                    {y.timeTable.map((z, index) => (
                      <div key={index}>
                        <div className="row" style={{ marginTop: '10%' }}>
                          <div className="col-6">
                            Take medicine on {z.time}
                          </div>
                          <div className="col-6">
                            <button
                              className="btn btn-primary"
                              style={{ marginLeft: "10px" }}
                              onClick={() => handleAddReminder(z.time, y.medicineName)}
                            >
                              Add Reminder
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
