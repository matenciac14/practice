const {djs} = require('../db');
const {guests} = require('../db');

exports.getDjs = async( req, res)=>{
    try {

        function countInArray(array, what) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] === what) {
                    count++;
                }
            }
            return (count)
            
        }
        let DjsResponse =  await djs
        let djsNumber =[]
        guests.forEach(element =>{
            djsNumber.push(element.guest_of)
        })
        
        DjsResponse.map(dj =>{
            dj.numbersOfGuest = countInArray(djsNumber, dj.name)
        })

        //console.log(DjsResponse)
        res.json(DjsResponse)
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}

exports.getFavoritesDjs = async( req, res)=>{
    try {
        
        function countInArray(array, what) {
            var count = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] === what) {
                    count++;
                }
            }
            return (count)
            
        }
        let DjsResponse =  await guests
        let djsNumber =[]
        guests.forEach(element =>{
            djsNumber.push(element.favourite_dj)
        })
        
        DjsResponse.map(dj =>{
            dj.numbersOfGuest = countInArray(djsNumber, dj.favourite_dj)
        })

        //console.log(DjsResponse)
        res.json(DjsResponse)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }

}