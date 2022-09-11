import './App.css';
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getUsers} from "./store/dataSlice.js"
import Loading from './store/Loading';

function App() {

  const data = useSelector((state) => state.userData.data);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <div className='heading' style={{margin:'3rem 0rem',textDecoration:'underline'}}>
          <h2>Redux Assignment: Redux API Integration</h2>
        </div>
        <div id='tableContainer'>
          <table>
            <thead>
              <tr className="headings"><th>Sl.no</th><th>Id</th><th>Name</th><th>User Name</th><th>Email</th></tr>
            </thead>
            <tbody>
              {!data.length>0 ? <Loading/> : data.map((items,index) => {
                return (
                  <tr key={`${Math.round(Math.random()*100)}_${index}`}><td >{index}</td><td>{`${index+30}`}</td><td>{items.name}</td><td>{items.username}</td><td>{items.email}</td></tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
