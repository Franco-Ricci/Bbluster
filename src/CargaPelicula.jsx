import logo from './logo.svg';
import './App.css';
import Peliculas from './Peliculas';
import PageWrapper from './PageWrapper';
import PeliculasJson from './ListaPeliculas';
import Paginacion from './Paginacion';
import { useState } from 'react';

function CargaPelicula() {

const [paginaActual, setPaginaActual] = useState(1)


let peliculas = PeliculasJson


let totalPorPagina = 7

const cargarPaginacionPel = () =>{
 peliculas = peliculas.slice((paginaActual -1) *totalPorPagina, paginaActual * totalPorPagina) 

}

const getTotalPelis = () =>{

  let totalPel =PeliculasJson.length 

  return Math.ceil(totalPel/totalPorPagina) 

}

cargarPaginacionPel()
  return (
    <PageWrapper>
      {peliculas.map(pelicula => (
        <Peliculas key={pelicula.id} titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img} descripcion={pelicula.descripcion}>

      </Peliculas>)
      )}

    <Paginacion pagina={paginaActual} total={getTotalPelis()} onChange={(pagina)=>{
      setPaginaActual(pagina)
    }}/>
    </PageWrapper>
    
  );
}

export default CargaPelicula;
