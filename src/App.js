import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilPhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


function App() {
  return (
    <div>
      <div className="container border border-5">
  <div className="row">
    <div className="col">  
    </div>
    <div className="col-5">
    <ProfilPhoto/>
    <FullName/>
    <Address/>
    </div>
    <div className="col">
      </div>
  </div>
</div>
    </div>
  );
}

export default App;
