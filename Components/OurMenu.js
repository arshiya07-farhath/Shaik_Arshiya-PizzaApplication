import {useEffect,useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Ourmenu(){

  const [ourmenu , setOurmenu]= useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchourmenu();
    }, [])



    const fetchourmenu=()=>{
      axios.get('http://localhost:3000/ourmenu')
      .then(response => {
        setOurmenu(response.data);
       })
      .catch(error =>{
        console.error('Error fetching data',error)
      })

    }

    const handleDelete= (id) => {
      axios.delete(`http://localhost:3000/ourmenu/${id}`)
      .then(response => {
        fetchourmenu();
       })
      .catch(error =>{
        console.error(' There was an error deleting the vehicle data',error)
      })

    }


  return(
    <div className="container mt-4">
      <h2>Our Menu</h2>
      <div className="row">
        {ourmenu.map(ourmenu => (
          <div className="col-md-4" key={ourmenu.id}>
            <img src={ourmenu.image} className="card-img-top" alt="pizza" height=""/>
            <div className="card-body">
              <h5 className="card-title">{ourmenu.name}</h5>
              <p className="card-text">Price: ${ourmenu.price}</p>
              <p className="card-text">Size: {ourmenu.Size}</p>
              <p className="card-text">token:{ourmenu.token}</p>
              <p className="card-text">id: {ourmenu.id}</p>
              <button className="btn btn-primary me-2" onClick={()=>handleDelete(ourmenu.id)}>Delete</button>
              <button className="btn btn-warning" onClick={()=>navigate(`/update-menu/${ourmenu.id}`)}>UPDATE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Ourmenu;