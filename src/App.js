import React from 'react';
import puce from './puce.png'
import visa from './visa.jpg'
import space from  './space.jpg'
import './App.css'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardholder:'',
            holderName:'',
            Validity:''
         };
    }
    changeName=(event)=>{
      if(event.target.value != event.target.value.match(/[^a-z ]/g)){
      this.setState({
            holderName:event.target.value
        })
      }
      }
    changeValidity=(event)=>{
       this.setState({
            Validity:event.target.value 
       }) 
    }
    changeNumber=(event)=>{
      if(event.target.value != event.target.value.match(/[^0-9 ]/g)){
      this.setState({
       
           cardholder:event.target.value
        })
      }
    }
    splitString = (x) => {
      return (
        x.replace(/(.{4})/gi, '$1 ').trim()
      )
    }
    removeF=(y)=>{
      return(
          y.replace(/(.{2})/gi,'$1/').substr(0,5)
      )
  }
 
render(){
    return(
        <div className='complex-card'>
        <div className='forms'>
         <span>Card holder:</span><input value={this.state.holderName} type='text' onChange={this.changeName} maxLength='20'></input>
         <span>Valid thru:</span>  <input type='text' onChange={this.changeValidity} maxLength="5"></input>
         <span>Card Number:</span><input value={this.state.cardholder} type='text' onChange={this.changeNumber} maxLength="16"></input>
        </div>
        
        <div className="card">
        <h1>CREDIT CARD</h1>
        <img className="creditcard" src={puce} alt="puceBancaire"></img>
           <div className="cardaprameters">
           <div className="card-infos">
              <p className="numCB">{this.splitString(this.state.cardholder.padEnd(16,'●'))}</p>
              <p className="code">5422 </p>
              <p className="text">{this.state.holderName.toUpperCase()}</p>
          </div>
         <div className="Validthru">
          
           <p className="validation">VALID<br/>THR <span>{this.removeF(this.state.Validity.padEnd(4,'●'))}</span></p>
           
            <img className="visa" src={visa} alt="visaBancaire"></img>
            </div>
        </div>
        </div>
       </div>
         );
    }
  }
