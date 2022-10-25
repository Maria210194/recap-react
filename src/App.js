import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Mary" age={28} email="mary@gmail.com" />
      <User name="Pippo" age={82} email="pippo@gmail.com" />
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <span>Salary: {props.salary} </span>
      <span>Position: {props.position} </span>
      <span>Company: {props.company} </span>
    </div>
  );
};

export default App;
