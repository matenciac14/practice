import React, { useState } from "react";

const NewGuests = () => {
  const [guest, setGuest] = useState({
    name: "",
    location: "",
    guest_of: "",
    favourite_dj: "",
  });
  const [error, setError] = useState(false);

  const change = (e) => {
    setGuest({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  const submitNuevaFoto = (e) => {
    e.preventDefault();

    if (
      e.name === "" ||
      e.location === "" ||
      e.guest_of === "" ||
      e.favourite_dj === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    console.log({ e });
  };

  return (
    <div className="container bg-dark text-white mt-5 p-3 col-8">
      <h3 className="mb-3">Register a new Guest</h3>
      <form onSubmit={submitNuevaFoto}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={guest.name}
              onChange={(e) => change(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={guest.location}
              onChange={(e) => change(e)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Guest Of</label>
            <input
              type="text"
              className="form-control"
              id="guest_of"
              name="guest_of"
              value={guest.guest_of}
              onChange={(e) => change(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Favourite Dj</label>
            <input
              type="text"
              className="form-control"
              id="favourite_dj"
              name="favourite_dj"
              value={guest.favourite_dj}
              onChange={(e) => change(e)}
            />
          </div>
        </div>
        {error ? (
          <div className="alert alert-danger" role="alert">
            write all info
          </div>
        ) : null}
        <button type="submit" className="btn btn-success btn-block">
          Register
        </button>
      </form>
    </div>
  );
};

export default NewGuests;
