import React from 'react';
import { Link } from 'react-router-dom';
import  Swal  from 'sweetalert2';

//Redux
import { borrarProductoAction } from '../actions/productosActions';
import { useDispatch } from 'react-redux';

const Producto = ({producto}) => {

    //Dispatch para ejecutar las acciones
    const dispatch = useDispatch();

    const confirmarEliminarProducto = id => {

        //Preguntar al usuario
        Swal.fire({
            title: 'Esta seguro de querer eliminar?',
            text: "Producto eliminado no puede ser restaurado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Eliminado!',
                'El libro ha sido eliminado corretamente',
                'success'
              )
              //Confirmación de SweetAlert
              console.log(id);
             dispatch(borrarProductoAction(id));
            }
          })
    }

       return (
        <tr>
            <td>{producto.nombre}</td>
            <td><span className="font-weight-bold">$ {producto.precio}</span></td>
            <td className="acciones">
                    <Link to={`/productos/editar/${producto.id}`}
                          className="btn btn-primary mr-2">
                              Editar
                    </Link>

                    <button className="btn btn-danger"  
                            onClick={ () => confirmarEliminarProducto(producto.id) }>
                        Eliminar
                    </button>

            </td>
        </tr>

       );
}

export default Producto;