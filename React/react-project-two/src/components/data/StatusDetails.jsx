export const StatusDetails = () => {
  // let [status, setStatus] = useState([]);

  let string = sessionStorage.getItem("loggedIn"); 

  let profile = JSON.parse(string)
  console.log(profile.statusId.name);

  const status = profile.statusId;  //status object
  const interval = profile.intervalId;

  return (
    <div>
      <h2 id="account-titles">Status</h2>
      <ul className="list-group list-group-flush" id="profile-details">
        <li className="list-group-item">
          <h2>{status.name}</h2>
        </li>
        
      </ul>
      <h2 id="account-titles">Interval</h2>
      <ul className="list-group list-group-flush" id="profile-details">
        <li className="list-group-item">
          <h2>{interval.name}</h2>
        </li>
        
      </ul>
    </div>
  );
};
