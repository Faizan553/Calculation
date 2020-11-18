import React from 'react'
import {connect} from 'react-redux'


class Table extends React.Component{
constructor(){
    super()
    this.state={
        data:[]
    }
}





    render(){
      

    
    const last = this.props.last
  
        let val = this.props.data
        // let last = this.props.last
        
        let ke = val.ke
        let bill = val.bill
        let ans = val.adnan-last.adnan
        let ans1 = val.farooq-last.farooq
        let ans2 = val.fawad-last.fawad
        let ans3 = val.younus-last.younus
        let ans4 = val.abc-last.abc
        let factor1 = ke/(ans+ans1+ans2+ans3+ans4)
        let factor =parseFloat(factor1).toFixed(6)
        
        
        
       


    
        let tucs = ans*factor
        let tuc = parseFloat(tucs).toFixed(2)
        let tucs1 = ans1*factor
        let tuc1 = parseFloat(tucs1).toFixed(2)
        let tucs2 = ans2*factor
        let tuc2 = parseFloat(tucs2).toFixed(2)
        let tucs3 = ans3*factor
        let tuc3 = parseFloat(tucs3).toFixed(2)
        let tucs4 = ans4*factor
        let tuc4 = parseFloat(tucs4).toFixed(2)

        let ttucs =  (tucs+tucs1+tucs2+tucs3+tucs4)
        let ttuc=parseFloat(ttucs).toFixed(0)




        let bas = (bill/ke)*tuc
        let ba = parseFloat(bas).toFixed(2)
        let bas1 = (bill/ke)*tuc1
        let ba1 = parseFloat(bas1).toFixed(2)
        let bas2 = (bill/ke)*tuc2
        let ba2 = parseFloat(bas2).toFixed(2)
        let bas3 = (bill/ke)*tuc3
        let ba3 = parseFloat(bas3).toFixed(2)
        let bas4 = (bill/ke)*tuc4
        let ba4 = parseFloat(bas4).toFixed(2)

        let tbas = (bas+bas1+bas2+bas3+bas4)
        let tba = parseFloat(tbas).toFixed(0)
        
        
        return(
            <div>
                    <br/><br/>
                    <div className="container">
<div className="row justify-content-center center">
<div className="col-lg-6">
<h2>ELECTRIC BILL</h2>
</div>
</div>
<br/>
<div className="row justify-content-center center">
<div className="col-lg-6">
        <h4>MONTH OF {val.month}</h4>
</div>
</div>
                    </div>
                <br/>
           
            <div className="container">
<div className="row justify-content-center center">
<div className="col-lg-4 ">
        <p><b>Total Units =</b> <span className="underline">{val.ke}</span></p>
</div>
</div>

<div className="row justify-content-center center">
<div className="col-lg-4 ">
        <p><b>Total Amount =</b> <span className="underline"> {val.bill}</span></p>
</div>
</div>
<br />

<div className="row justify-content-center center">
<div className="col border3"><b>Name</b></div>
<div className="col border-2"><b>Current Reading</b></div>
<div className="col border-2"><b>Previous Reading</b></div>
<div className="col border-2"><b>Diff. Units</b></div>
<div className="col border-2"><b>Unit Factor</b></div>
<div className="col border-2"><b>Total Units Consumed</b></div>
<div className="col border-2"><b>Bill Amount</b></div>

</div>


<div className="row justify-content-center center">
<div className="col border-4"><b>Adnan</b></div>
        <div className="col border-1"  >{val.adnan}</div>
        <div className="col border-1">{last.adnan}</div>
        <div className="col border-1">{ans}</div>
        <div className="col border-1">{factor}</div>
        <div className="col border-1">{tuc}</div>
        <div className="col border-1">{ba}</div>


</div>



<div className="row justify-content-center center">
<div className="col border-4"><b>Farooq</b></div>
<div className="col border-1">{val.farooq}</div>
        <div className="col border-1">{last.farooq}</div>
        <div className="col border-1">{ans1}</div>
<div className="col border-1">{factor}</div>
<div className="col border-1">{tuc1}</div>
        <div className="col border-1">{ba1}</div>


</div>



<div className="row justify-content-center center">
<div className="col border-4"><b>Fawad</b></div>
<div className="col border-1">{val.fawad}</div>
        <div className="col border-1">{last.fawad}</div>
<div className="col border-1">{ans2}</div>
<div className="col border-1">{factor}</div>
<div className="col border-1">{tuc2}</div>
<div className="col border-1">{ba2}</div>


</div>



<div className="row justify-content-center center">
<div className="col border-4"><b>Younus</b></div>
<div className="col border-1">{val.younus}</div>
        <div className="col border-1">{last.younus}</div>
<div className="col border-1">{ans3}</div>
<div className="col border-1">{factor}</div>
<div className="col border-1">{tuc3}</div>
<div className="col border-1">{ba3}</div>

</div>


<div className="row justify-content-center center">
<div className="col border-4"><b>ABC</b></div>
<div className="col border-1">{val.abc}</div>
        <div className="col border-1">{last.abc}</div>
<div className="col border-1">{ans4}</div>
<div className="col border-5">{factor}</div>
<div className="col border-5">{tuc4}</div>
<div className="col border-5">{ba4}</div>

</div>


<div className="row justify-content-center center">
<div className="col border-w"></div>
<div className="col border-w"></div>
        <div className="col border-w"></div>
<div className="col border-w"></div>
<div className="col border3"><b>Total</b></div>
<div className="col border-2"><b>{ttuc}</b></div>
        <div className="col border-2"><b>{tba}</b></div>

</div>

<br />
<div className="row">
<div className="col">
        <p><b>Due Date:</b> <span className="underline">{val.date}</span></p>
</div>

</div>








            </div>
            </div>
        )
    }
}


const mapstatetoprops = (state) => ({
    data:state.data,
    last:state.last
    })
    
    // const mapdispatchtoprops = (dispatch)=>({
    //     send:(s,h)=>dispatch(send(s,h))
    // })
    
    
    export default connect(mapstatetoprops,null)(Table)