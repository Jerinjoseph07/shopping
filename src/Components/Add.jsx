import React from 'react'

const Add= (props) => {
    var[input,setInput] =useState(props.data)
  console.log(props.data)    
  
    const inputHandler =(e)=>{
     const{name,value}=e.target
     setInput({...input,[name]:value})
    }
    const readValues= ()=>{
      console.log("clicked")
      if(props.method==="post"){
      axios.post("http://localhost:3007/shopping",input)
      .then(response=>{
        alert("Successfully Added")
      })
      .catch(error=>console.log(error))
    }else if(props.method==="put"){
      axios.put("h/"+input.id,input)
      .then(response=>{
      alert("update successfully")
      window.location.reload(false)
      })
      .catch(error=>console.log(error))
    }
  }
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <TextField label="Name" name='name' variant="outlined" value={input.name} onChange={inputHandler}/><br></br><br/>
        <Typography>{input.name}</Typography>
        <TextField label="Brand" name='Brand' variant="outlined" value={input.Brand} onChange={inputHandler}/><br/><br></br>
        <Typography>{input.Brand}</Typography>
        <TextField label="Quantity" name='Quantity' variant="outlined" value={input.Quntity} onChange={inputHandler}/><br/><br></br>
        <Typography>{input.Quantity}</Typography>
        <TextField label="Price" name='Price' variant="outlined" value={input.price} onChange={inputHandler}/><br/><br></br>
        <Typography>{input.Price}</Typography>
        <Button variant='contained' onClick={readValues}>Submit</Button>
        </div>
    )
    }
  

export default Add
