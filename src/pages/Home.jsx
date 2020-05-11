import React, {useEffect, useState} from 'react';

import {db} from '../utils/firebase.js';

const Home = () => {

    const [datos, setDatos] = useState([]);
    const [mensaje, setMensaje] = useState({});

    useEffect(() => 
    {
        obtenerDatos();

        // eslint-disable-next-line
    },[]);

    const envioDeSchema = async () => 
    {
        try 
        {
            let data = await db.collection("pruebas").add(mensaje);
    
            console.log(data);            
        } 
        catch(error) 
        {
            console.log(error);
            
        }
    }

    const obtenerDatos = async() =>
    {
        db.collection('pruebas').onSnapshot((data) => 
        {

            console.log(data.docs);
            
            
            setDatos(...datos, data.docs.map(a => {

                

                return(
                    {
                        id: a.id,
                        data: a.data()
                    }
                );

            }));

        });
    } 

    const handleChange = (e) => 
    {
        setMensaje({
            ...mensaje,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className="container">
            <h1>Prueba para cli</h1>
        
            <input type="text" name="mensaje" value={mensaje.mensaje} placeholder="mensaje" className="form-control mt-3" onChange={handleChange} />
            <input type="text" name="motivo" value={mensaje.motivo} placeholder="motivo" className="form-control mt-3" onChange={handleChange} />
            <button className="btn btn-dark mt-3" onClick={envioDeSchema} >Enviar</button>

            <div style={{position: 'relative', height: '350px', overflow: 'auto', display: 'block'}} className="mt-5" >
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">MENSAJE</th>
                            <th scope="col">MOTIVO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datos.length > 0 ?
                            datos.map((a,i) => 
                            {
                                return(
                                    <tr key={i}>
                                        <th scope="row">{a.id}</th>
                                        <td> {a.data.mensaje} </td>
                                        <td> {a.data.motivo} </td>
                                    </tr>
                                )
                            }):
                            <p>cargando mensaje...</p>
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Home;