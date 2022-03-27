import './App.css';
import Test from "./components/Test"
import Employee from "./components/Employee"
import Accordion from './components/Accordion';
import Balok from './pages/Balok';

function App() {
  return (
    <div className="App">
      {/* <h3 align="center">This is my custom components</h3> */}
      {/* 
      nama element: h3
      attributes / properties: align
      */}

      {/* <Test name="Calwa" city="Tugu" fontColor="teal" avatar="https://i.pinimg.com/564x/6b/95/01/6b9501905d858837e8258c474c1f99c5.jpg">
        Calwa adalah orang baik
        <button>Click</button>
      </Test>
      <Test name="Saipul" city="Gandusari" fontColor="plum" avatar="https://4.bp.blogspot.com/-QA62e1YMTHs/W3-zjNGp0iI/AAAAAAABEss/UVcnbsN9GQE3rXJutzLgCFRlc6sqSayVACLcBGAs/s1600/anthony%2Bginting%2Bgrid%2Bid.jpg">
        Saipul adalah orang mageran
        <button>Click</button>
      </Test>
      <Test name="Ochi" city="Trenggalek" fontColor="coral" avatar="https://i1.sndcdn.com/avatars-asozWT2OMMpyNnP2-M4zgqg-t500x500.jpg">
        Ochi adalah orang bucin
        <button>Click</button>
      </Test> */}
      {/* <h3 align="center">Custom Components</h3> */}

      {/* <div className='accordion' id='accordion1'>
        <Accordion id="item1" header="Header 1" parent="#accordion1">
          <Employee
            name="Ardhian Calwa Nugraha"
            birthday="16-05-2005"
            gender="Male"
            email="ardhiancalwa29@gmail.com"
            contact="082264382796"
            devision="Student"
            image="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png"

          />
        </Accordion>
      </div>

      <Accordion id="item2" header="Header 2" parent="#accordion1">
        <Employee
          name="Deazard"
          birthday="29-02-2005"
          gender="Female"
          email="deazard29@gmail.com"
          contact="0822675146154"
          devision="Student"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
        />
      </Accordion>

      <Accordion id="item3" header="Header 3" parent="#accordion1">
        <Employee
          name="Bagus"
          birthday="31-03-2005"
          gender="Male"
          email="bagus29@gmail.com"
          contact="082786776153"
          devision="Student"
          image="https://upload.wikimedia.org/wikipedia/en/a/a0/Sandy_Cheeks.svg"
        />
      </Accordion> */}

      {/* tampilkan komponen balok */}
      <Balok title="Lemari" />

      <Balok title="Kotak Pensil" />
    </div>
  );
}

export default App;
