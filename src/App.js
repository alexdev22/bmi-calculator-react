import { useState } from 'react';

function App() {
  const [bmi, setBmi] = useState(0);
  const [error, setError] = useState([]);

  const weigth = document.querySelector('.weigth');
  const height = document.querySelector('.height');
  const metric = document.getElementById('metric');
  const imperial = document.getElementById('imperial');

  const calculateBmiMetric = () => {
    return setBmi(weigth.value / height.value ** 2);
  };

  const calculateBmiImperial = () => {
    return setBmi((weigth.value * 703) / height.value ** 2);
  };

  const calculateBmi = e => {
    e.preventDefault();

    if (metric.checked) {
      calculateBmiMetric();
      setError('');
    }
    if (imperial.checked) {
      calculateBmiImperial();
      setError('');
    }

    if (metric.checked && imperial.checked) {
      setError('Check just 1');
    }
  };

  return (
    <div className="App">
      <form>
        <h1>BMI Calculator</h1>
        <div className="text-inputs">
          <input type="text" placeholder="weigth" className="weigth" />
          <input type="text" placeholder="height" className="height" />
          <button className="bmi-button" onClick={calculateBmi}>
            Calculate BMI
          </button>
        </div>
        <div className="checks">
          <input type="checkbox" value="metric" id="metric"></input>
          <label for="metric">Metric</label>
          <input type="checkbox" value="imperial" id="imperial"></input>
          <label for="imperial">Imperial</label>
        </div>
      </form>
      
  
      <div className="result">BMI: <strong>{bmi.toFixed(2)}</strong></div> 
  
      
</div>


  );
}

export default App;
