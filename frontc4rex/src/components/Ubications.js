import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUbicationsAction } from "../actions/djsActions";

const Ubications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUbi = () => dispatch(getUbicationsAction());
    getUbi();   

  }, []);

  let Ubi =useSelector(state => state.djs.ubications)



        let arrsort = Ubi
        arrsort.sort( (a, b)=> {
            var x = a['numberlocation']; var y = b['numberlocation'];
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
        });
    


  return (
    <div className="container mt-5">
        <h3>Ubications of Guests </h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ubication Name</th>
            <th scope="col">Number of Guests</th>
          </tr>
        </thead>
        <tbody>
          {Ubi.map((d, index) => (
            <tr key={index}>
              <th scope="row">{index+1}</th>
            <td>{d.location}</td>
          <td>{d.numberlocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ubications;
