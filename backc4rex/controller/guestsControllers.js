const {guests} = require('../db');

exports.getGuests = async( req, res)=>{
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
            return (count)
            
        }
        let UbicationResponse =  await guests
        let UbiNumber =[]
        guests.forEach(element =>{
            UbiNumber.push(element.location)
        })
        
        UbicationResponse.map(ubi =>{
            ubi.numberlocation = countInArray(UbiNumber, ubi.location)
        })

        //console.log(DjsResponse)
        res.json(UbicationResponse)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}