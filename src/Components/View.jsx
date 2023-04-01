import React from 'react'

const View = () => {
    var[update,setupdate]=useState(false)
    var[selected,setselected] =useState([])
    var[shopping,setShopping] =useState([])
    useEffect(()=>{
        axios.get("http://localhost:3007/shoppinghttp://localhost:3007")
        .then(response=>{
        setStudents(shopping=response.data)
        console.log(shopping)
    })
        .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3007/shopping/"+id)
        .then(response=>{
            alert("Successfully Deleted")
            window.location.reload(false)
        })
        .catch(error=>console.log(error))
    }
    const updateValue=(value)=>{
        setselected(value)
        setupdate(true)
    }
    var finalJSX= <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>Quntity</TableCell>
                    <TableCell>Price</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return <TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.Name}</TableCell>
                        <TableCell>{value.Brand}</TableCell>
                        <TableCell>{value.Quntity}</TableCell>
                        <TableCell>{value.Price}</TableCell>
                        <TableCell><Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                        <TableCell><Button onClick={()=>updateValue(value)}>Update</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
    if(update)
    finalJSX=<Add data={selected}method="put"/>
    return (
        finalJSX
  )
}



export default View
