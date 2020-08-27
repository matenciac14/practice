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
                   
                } //arr.push({Djs:what,N:count})
            }
            return ({name:what,rate:count})              
            
        }
        let DjsResponse = []
        let djsNumber =[]
        let djsname =[]
        let NewResponse =[]
        
        await guests.forEach(element =>{
            if (!(element.favourite_dj in djsNumber)) {
                djsNumber[element.favourite_dj] = true
                djsname.push(element.favourite_dj)
            }
            DjsResponse.push(element.favourite_dj)
        })
        console.log(DjsResponse)
        console.log(djsNumber)
        console.log(djsname)
        
        await djsname.map(dj =>{
            NewResponse.push(countInArray(DjsResponse, dj))
        })

       console.log(NewResponse)
         res.json(NewResponse)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }

}