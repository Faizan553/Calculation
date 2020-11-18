import React from 'react'
import { connect } from 'react-redux'
import { send, add } from '../store/action'
import firebase from '../config/firebase'




class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            adnan: '',
            younus: '',
            farooq: '',
            fawad: '',
            abc: '',
            ke: '',
            bill: '',
            date: '',
            month: '',
            edit: false
        }
    }


    send = (v, i) => {
        let store = []
        firebase.database().ref('/').on('child_added', (data) => {

            store.push(data.val())

        })
        let last = []
        for (var j = 0; j < i; j++) {

            last.push(store[j])


        }


        // const last = this.state.data[this.state.data.length-1]

        this.props.send(v, this.props.history, last)

    }


    del = (v, i) => {

        firebase.database().ref('/').child(v.data).remove()
        this.state.data.splice(i)
        this.setState({
            data: this.state.data
        })



    }

    componentDidMount = () => {
        firebase.database().ref('/').on('child_added', (data) => {

            this.state.data.push(data.val())

            this.setState({
                data: this.state.data
            })
        })

        var d = new Date()
        var n =d.getMonth()
        var y =d.getFullYear()
        
        
        switch (n) {
            case 0:
              this.state.month=`Jan,${y}`
              break;
            case 1:
                this.state.month=`Feb,${y}`
              break;
            case 2:
                this.state.month=`Mar,${y}`
              break;
            case 3:
                this.state.month=`Apr,${y}`
              break;
            case 4:
                this.state.month=`May,${y}`;
              break;
            case 5:
                this.state.month=`Jun,${y}`
              break;
            case 6:
                this.state.month=`Jul,${y}`
              break;
            case 7:
                this.state.month=`Aug,${y}`
              break;
            case 8:
                this.state.month=`Sep,${y}`
              break;
            case 9:
                this.state.month=`Oct,${y}`
              break;
            case 10:
                this.state.month=`Nov,${y}`
                break;
            case 11:
                this.state.month=`Dec,${y}`
                break;
                
          }
        this.setState({
            data:this.state.data
        })


    }

    go = () => {
       
        
        this.props.add(this.state)
        this.setState({

            adnan: '',
            younus: '',
            farooq: '',
            fawad: '',
            abc: '',
            ke: '',
            bill: '',
            date: '',
            
            
        })
        
    }

    edit = () => {
        this.state.edit = true

        this.setState({
            data: this.state.data
        })

    }
    update = () => {
        this.state.edit = false
        const obj = Object.assign(this.state.data)

        for (var i = 0; i < obj.length; i++) {
            var data = (this.state.data[i])

            firebase.database().ref('/').child(data.data).set(data).then(() => {
                console.log("saved")
            })
        }
        this.setState({
            data: this.state.data
        })

    }

    change = (e, i, name) => {
        this.state.data[i][name] = e.target.value

    }
  
    render() {


        return (

            <div>
                <br /><br /><br /><br />
                <div className="container">
                    <div className="row justify-content-center center">
                        
                    <div className="col border3"></div>

                        <div className="col border-2"><b>Adnan</b></div>
                        <div className="col border-2"><b>Younus</b></div>
                        <div className="col border-2"><b>Farooq</b></div>
                        <div className="col border-2"><b>Fawad</b></div>
                        <div className="col border-2"><b>ABC</b></div>
                        <div className="col border-2"><b>KE Units</b></div>
                        <div className="col border-2"><b>Bill Amount</b></div>
                        <div className="col border-2"><b>Due Date</b></div>
                        <div className="col border-2"></div>

                    </div>
                </div>
                <div className="container">


                    {this.state.data.map((v, i) => {
                        return <div className="row justify-content-center">

                            

                            <div className="col border-4 center">{this.state.edit ? <input type="text" defaultValue={v.month} onChange={(e) => this.change(e, i, "month")} /> : v.month} </div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.adnan} onChange={(e) => this.change(e, i, "adnan")} /> : v.adnan} </div>
                            <div className="col border-1 center">{this.state.edit ? <input defaultValue={v.younus} onChange={(e) => this.change(e, i, "younus")} type="text" /> : v.younus}</div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.farooq} onChange={(e) => this.change(e, i, "farooq")} /> : v.farooq}</div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.fawad} onChange={(e) => this.change(e, i, "fawad")} /> : v.fawad}</div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.abc} onChange={(e) => this.change(e, i, "abc")} /> : v.abc}</div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.ke} onChange={(e) => this.change(e, i, "ke")} /> : v.ke}</div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.bill} onChange={(e) => this.change(e, i, "bill")} /> : v.bill}</div>
                            <div className="col border-1 center">{this.state.edit ? <input type="text" defaultValue={v.date} onChange={(e) => this.change(e, i, "date")} /> : v.date}</div>
                            <div className="col border-1 center">{i !== 0 && <div > <button onClick={() => this.send(v, i)} className="button" >Gen</button></div>}
                            </div>

                            {/* &nbsp;<button onClick={()=>this.del(v,i)} className="button">del</button> */}

                        </div>
                    })}


                </div>
                <div className="container">
                    <div className="row justify-content-center center">
                        
      
                <div className="col border-4">{this.state.month}</div>
                        <div className="col border-1"><input type="text" value={this.state.adnan} onChange={(e) => this.setState({ adnan: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.younus} onChange={(e) => this.setState({ younus: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.farooq} onChange={(e) => this.setState({ farooq: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.fawad} onChange={(e) => this.setState({ fawad: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.abc} onChange={(e) => this.setState({ abc: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.ke} onChange={(e) => this.setState({ ke: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.bill} onChange={(e) => this.setState({ bill: e.target.value })} /></div>
                        <div className="col border-1"><input type="text" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} /></div>
                        <div className="col border-1"><button onClick={() => this.go()} className="button">Add</button></div>
                        {/* <div className="col border">name</div>
<div className="col border">name</div> */}
                    </div>
                    <br />
                    <div className="row">
                        <div className="col ">
                            {this.state.edit ? <button onClick={() => this.update()} className="btn btn-info">Update</button> :
                                <button type="button" onClick={() => this.edit()} className="btn btn-info">Edit</button>

                            }
                        </div>

                       

                    </div>

                </div>
            </div>
        )
    }
}


const mapstatetoprops = (state) => ({
    data: state.data,

})

const mapdispatchtoprops = (dispatch) => ({
    send: (s, h, l) => dispatch(send(s, h, l)),
    add: (s) => dispatch(add(s))
})


export default connect(mapstatetoprops, mapdispatchtoprops)(Home)