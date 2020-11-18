const Initial ={
    name:"faizan",
    data:[],
    last:[]
}

export default  (state =  Initial,action)=>{
  
    switch (action.type){
        case "SET":
            return({
                ...state,
                data:action.data,
                last:action.last
            })
            // case "set":
            //     return({
            //         ...state,
            //         last:action.data
            //     })
    }
return state;
}