// import logo from './logo.svg';
import './Appa.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';



function App() {
  return (
    <>
<Navbar/>
<div className="container my-2">

<Textform heading="Enter text to analyze below..."/>
</div>
    </>
  );
}

export default App;
