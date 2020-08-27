const { guests } = require("../db");

exports.getGuests = async (req, res) => {
  try {
    // let GuestsResponse =  await guests
    // res.json(GuestsResponse)
    function countInArray(array, what) {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
          count++;
        }
      }
      return { location: what, NumberPeople: count };
    }
    let UbicationResponse = [];
    let UbiNumber = [];
    let UbiName = [];
    let NewResponse = [];

    await guests.forEach((element) => {
      if (!(element.location in UbiNumber)) {
        UbiNumber[element.location] = true;
        UbiName.push(element.location);
      }
      UbicationResponse.push(element.location);
    });
    await UbiName.map((ubn) => {
      NewResponse.push(countInArray(UbicationResponse, ubn));
    });

    res.json(NewResponse);
  } catch (error) {
    console.log(error);
    res.status(500).send("error");
  }
};
