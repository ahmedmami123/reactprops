
import './App.css';
import Profile from "./profile/Profile";
function App() {
  const fullName="ahmed";
  const Bio="ahmed mami";
  const profession="student";
  const handleAlert =(x)=>alert(x);
  return (
    <div className="App">
   <Profile fullName={fullName} Bio={Bio} profession={profession} handleAlert={handleAlert}/>
    </div>
  );
}

export default App;
