import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { faPerson, faPersonWalking, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const API_URL = 'http://localhost:5000';
const SENSOR_ID = 'your-sensor-id';

const Dashboard = () => {


   return (
      <div className="sec box-dash">
         <Link to='/Login'><FontAwesomeIcon icon={faArrowLeft} /> Voltar</Link>
         <h2>Dashboard</h2>
         <div className="blocos justify-content-between mb-2">
            <div className='bloco col-2 p-3'><p>Conexão</p><span><p className='text-on'>ON</p><div className='bolinha'></div></span></div>
            <div className='bloco col-2 p-3'><p>Movimento</p><span><p>Sim</p><p><FontAwesomeIcon className='icon' icon={faPersonWalking} /></p></span></div>
            <div className='bloco col-3 p-3'><p>Intensidade da Luz</p><span><p>Alta</p></span></div>
            <div className='bloco col-3 p-3'><p>Ambiente</p><span><p>Escuro</p><p><FontAwesomeIcon className='icon' icon={faMoon} /></p></span></div>
         </div>
         <div className="tabela table-responsive rounded border pt-2 px-2">
            <table className='table table-hover border'>
               <thead>
                  <tr>
                     <th className='col'>#</th>
                     <th className='col-2'>Horário</th>
                     <th className='col-2'>Conexão</th>
                     <th className='col-2'>Movimento</th>
                     <th className='col-3'>Intensidade da Luz</th>
                     <th className='col-2'>Ambiente</th>
                  </tr>
               </thead>
               <tbody>

                  <tr>
                     <th>4</th>
                     <td>20:30</td>
                     <td>On</td>
                     <td>Sim</td>
                     <td>Alta</td>
                     <td>Escuro</td>
                  </tr>
                  <tr>
                     <th>3</th>
                     <td>20:30</td>
                     <td>On</td>
                     <td>Sim</td>
                     <td>Alta</td>
                     <td>Escuro</td>
                  </tr>
                  <tr>
                     <th>2</th>
                     <td>20:30</td>
                     <td>On</td>
                     <td>Sim</td>
                     <td>Alta</td>
                     <td>Escuro</td>
                  </tr>
                  <tr>
                     <th>1</th>
                     <td>20:30</td>
                     <td>On</td>
                     <td>Sim</td>
                     <td>Alta</td>
                     <td>Escuro</td>
                  </tr>

               </tbody>
            </table>

         </div>


      </div>
   );
};

export default Dashboard;

/* 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './styles.css';

const API_URL = 'http://localhost:5000';
const SENSOR_ID = 'your-sensor-id';

const App = () => {
 const [data, setData] = useState([]);
 const [sensorData, setSensorData] = useState({});
 const [isDark, setIsDark] = useState(false);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${API_URL}/api/data/${SENSOR_ID}`);
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
 }, []);

 useEffect(() => {
    if (data.length > 0) {
      const latestData = data[0];
      setSensorData(latestData);
      setIsDark(latestData.lightIntensity < 50);
    }
 }, [data]);

 const graphData = {
    labels: data.map(d => d.timestamp),
    datasets: [
      {
        label: 'Light Intensity',
        data: data.map(d => d.lightIntensity),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
 };

 return (
    <div className="sec box-dash">
      <Link to='/Login'><FontAwesomeIcon icon={faArrowLeft} /> Voltar</Link>
      <h2>Dashboard</h2>

      <div className="blocos justify-content-between mb-2">
         <div className='bloco col-2 p-3'>
            <p>Conexão</p> 
            <span>{
               sensorData.isConnected ? '<p className='text-on'>ON</p><div className='bolinha'></div>' 
               : '<p className='text-off'>OFF</p><div className='bolinha-vermelha'></div>'
            }</span>
         </div>

         <div className='bloco col-2 p-3'>
            <p>Movimento</p> 
            <span>{
               sensorData.movement ? '<p>Sim</p><p><FontAwesomeIcon className='icon' icon={faPersonWalking} /></p>' 
               : '<p>Não</p><p><FontAwesomeIcon className='icon' icon={faPerson}</p> />'
            }</span>
         </div>

         <div className='bloco col-2 p-3'>
            <p>Intensidade da Luz</p> {sensorData.lightIntensity}   
            <div className="graph">
            <Line data={graphData} />
            </div> 
         </div>

         <div className='bloco col-2 p-3'>
            <p>Ambiente</p> 
            <span>{
               isDark ? '<p>Escuro</p><p><FontAwesomeIcon className='icon' icon={faMoon} /></p>' 
               : '<p>Claro</p><p><FontAwesomeIcon className='icon' icon={faSun} /></p>'
            }</span>
         </div>
         
      </div>
      
      
      <table>
        <thead>
          <tr>
            <th className='col'>#</th>
            <th className='col-2'>Horário</th>
            <th className='col-2'>Conexão</th>
            <th className='col-2'>Movimento</th>
            <th className='col-3'>Intensidade da Luz</th>
            <th className='col-2'>Ambiente</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
               <th>{row.index}</th>
              <td>{row.timestamp}</td>
              <td>{row.isConnected ? 'Yes' : 'No'}</td>
              <td>{row.movement ? 'Yes' : 'No'}</td>
              <td>{row.lightIntensity}</td>
              <td>{row.lightIntensity < 50 ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default App; */


/* Please note that you will need to replace 'your-sensor-id' with the actual sensor ID.

In this solution, the data is fetched from the API every 5 seconds using useEffect. The latest data is stored in the sensorData state and the isDark state is updated based on the light intensity value. The graphData state is used to store the data for the line chart, and the chart is rendered using the Line component from react-chartjs-2. The historical log is displayed in a table.

The styles for the graph and table are included in the styles.css file, which you can customize to your liking. The file is currently empty, but you can add any necessary CSS styles for your components.

Remember to replace 'http://localhost:5000' with the actual URL of your backend server if it is not running locally. */