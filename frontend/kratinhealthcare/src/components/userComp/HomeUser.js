import { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";

export default function HomeUser() {
  const [arr, setArr] = useState([]);

  const [currentTime, setCurrentTime] = useState(new Date());
  const [reminderJson, setRiminderJson] = useState([{time : "",
                                                    medicineName : []}]);
  const [timeArr, SetTimeArr] = useState([]);

  useEffect(() => {
    UserServices.getAllDisease(JSON.parse(localStorage.getItem('userLoged')).id)
      .then((res) => {
        const temp = res.data;
     
        setArr(temp);
        // console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });

      UserServices.getOnlyTime(JSON.parse(localStorage.getItem('userLoged')).id)
      .then((res)=> {
        const dt = res.data;
        SetTimeArr(dt);
      }).catch((err)=> {

      });

     
      
   

  }, []);

  useEffect(() => {
    if (timeArr.length === 0 || arr.length === 0) return;

    const updatedReminderJson = timeArr.map((time) => ({
      time,
      medicineName: [],
    }));

    arr.forEach((x) => {
      x.dosage.forEach((y) => {
        y.timeTable.forEach((z) => {
          const medicineName = y.medicineName;
          updatedReminderJson.forEach((ele) => {
            if ((ele.time + ":00") === z.time) {
              ele.medicineName.push(medicineName);
            }
          });
        });
      });
    });

    setRiminderJson(updatedReminderJson);
 
  }, [timeArr, arr]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

 
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
  
    reminderJson.forEach((ele)=> {

      if((ele.time + ':00') == getCurrentTime()) {
        let str = '';
        ele.medicineName.forEach((e)=> {
          str += e + " ";
        })
        console.log(str);
        alert("time to take following medicine  " + str);
      }
    })
  
  }, [currentTime]);

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
              <div >
                {x.dosage.map((y, id) => (
                  <div key={id} style={{marginTop : '3%'}}>
                    <h6 className="card-subtitle text-muted">
                      Medicine Name: {y.medicineName}
                    </h6>
                    {y.timeTable.map((z, index) => (
                      <div key={index}>
                        <div className="row" style={{marginTop : '3%'}}>
                          <div >
                            Take medicine on {z.time}
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
