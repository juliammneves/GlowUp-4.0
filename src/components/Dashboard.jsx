import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPersonWalking, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Dashboard = () => {
   const [sensorData, setSensorData] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/sensorData/')
         .then((resp) => {
            return resp.json();
         })
         .then((resp) => {
            setSensorData(resp);
         })
   }, [])

   return (
      <div className="sec box-dash">
         <Link to='/Login'><FontAwesomeIcon icon={faArrowLeft} /> Voltar</Link>
         <h2>Dashboard</h2>
         <div className="blocos justify-content-between mb-2">
            <div className='bloco col-2 p-3'><p>Conexão</p><span><p className='text-on'>ON</p><div className='bolinha'></div></span></div>
            <div className='bloco col-2 p-3'><p>Movimento</p><span><p>Sim</p><p><FontAwesomeIcon className="icon" icon={faPersonWalking} /></p></span></div>
            <div className='bloco col-3 p-3'><p>Intensidade da Luz</p><span><p>Alta</p></span></div>
            <div className='bloco col-3 p-3'><p>Ambiente</p><span><p>Escuro</p><p><FontAwesomeIcon className="icon" icon={faMoon} /></p></span></div>
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
                  {sensorData.map((row, index) => (
                     <tr key={index}>
                        <th>{row.id}</th>
                        <td>{row.hora}</td>
                        <td>{row.sensorStatus}</td>
                        <td>{row.movementStatus}</td>
                        <td>{row.lightStrength}</td>
                        <td>{row.ambiente}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Dashboard;

{/* <div className='bloco col-2 p-3'>
            <p>Conexão</p> 
            <span>{
               sensorData.sensorStatus ? '<p className="text-on">ON</p><div className="bolinha"></div>' 
               : '<p className="text-off">OFF</p><div className="bolinha-vermelha"></div>'
            }</span>
         </div>

         <div className='bloco col-2 p-3'>
            <p>Movimento</p> 
            <span>{
               sensorData.movementStatus ? '<p>Sim</p><p><FontAwesomeIcon className="icon" icon={faPersonWalking} /></p>' 
               : '<p>Não</p><p><FontAwesomeIcon className="icon" icon={faPerson}</p> />'
            }</span>
         </div>

         <div className='bloco col-2 p-3'>
            <p>Intensidade da Luz</p> {sensorData.lightStrength}   
            <div className="graph">
           
            </div> 
         </div>

         <div className='bloco col-2 p-3'>
            <p>Ambiente</p> 
            <span>{
               sensorData.darkOrLight ? '<p>Escuro</p><p><FontAwesomeIcon className="icon" icon={faMoon} /></p>' 
               : '<p>Claro</p><p><FontAwesomeIcon className="icon" icon={faSun} /></p>'
            }</span>
         </div> */}