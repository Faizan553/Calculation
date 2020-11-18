import firebase from '../../config/firebase'


const send = (s,h,l)=>{
    return (dispatch)=>{
        let last = l[l.length-1]
        
        
        dispatch({type:"SET",data:s,last:last})
        h.push("/table")
       
        
       
    }
}

const add = (s)=>{
    return (dispatch)=>{


        
    var key = firebase.database().ref('/').push().key
    
      firebase.database().ref('/').child(key).set({
            adnan:s.adnan,
            farooq:s.farooq,
                fawad:s.fawad,
                younus:s.younus,
                abc:s.abc,
                ke:s.ke,
                bill:s.bill,
                date:s.date,
                data:key,
                month:s.month
                
            
        })

    }       
}


export {
    send
    ,add
}