import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFavoriteDjsAction } from "../actions/djsActions";

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getdjs = () => dispatch(getFavoriteDjsAction());
    getdjs();
  }, []);

  let djs = useSelector((state) => state.djs.favDjs);

  let arrsort = djs;
  arrsort.sort((a, b) => {
    var x = a["rate"];
    var y = b["rate"];
    return x < y ? 1 : x > y ? -1 : 0;
  });

  return (
    <div className="container mt-5">
      <h3>The favorites DJs </h3>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dj Name</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {djs.map((d, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{d.name}</td>
              <td>{d.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Favorites;
