import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { getDjsAction } from "../actions/djsActions";


const Djs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getdjs = () => dispatch(getDjsAction());
    getdjs();   

  }, []);

  let djs =useSelector(state => state.djs.djs)

  return (
    <div className="container mt-5">
      <div className="card-deck">
        {djs.map((d, index) =>(
            <div className="card col-4 p-0 text-white bg-dark " key={index}>
            <img src={d.urlImage} className="card-img-top" alt="..."  style={{height:"400px"}}/>
            <div className="card-body">
            <h5 className="card-title">{d.name}</h5>
              <p className="card-text">
                {d.numbersOfGuest+` Guests` }
              </p>
            </div>
          </div>
        ))}
       

      </div>
    </div>
  );
};

export default Djs;
