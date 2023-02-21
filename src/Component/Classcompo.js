import {Component} from 'react';


export default class ClassCompo extends  Component{
constructor(){
    super();
    this.state={
        name:"",
        department:"",
        rating:0,
        data:[]
    }
}


clickChange=(e)=>{
this.setState({[e.target.name]:e.target.value})


}
    handleClick=()=>{
        const saveData={
          name:this.state.name,
          department:this.state.department,
          rating:this.state.rating
        }

        const arr = this.state.data;
        arr.push(saveData);
        this.setState({data:arr})
    }

    render(){
        return(
        <div className='maindiv'>

         <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>

         <div className='inputdiv1'>Name:<input type='text' className='input1' name='name' placeholder='Enter Your Name'  onChange={this.clickChange}/>          </div>
         <br/>

         <div className='inputdiv2'>Department :<input type='text' className='input1' name='department' placeholder='Enter Department'  onChange={this.clickChange}/></div>
         <br/>
         
         <div className='inputdiv3'>Rating :<input type='number' className='input1' name='rating' placeholder='Enter Rating'  onChange={this.clickChange}/></div>
         <br/>

         <button className='btn' onClick={this.handleClick}>Submit</button>
         
         {this.state.data.map((item,index)=>{
         
         return(
           
            <div className='returndiv' key={index}>
            
            <span>Name :{item.name} |
           Department :{item.department} |
            Rating :{item.rating}</span> |
            
            </div>
            
        )
         })}

      
         </div>

        )
    }
}