import React from 'react'

export default function Peliculas(props) {

  return (
    <>		
    <div className="movie-item-style-2">
    <img src={props.img} alt=""/>
    <div className="mv-item-infor">
        <h6><a href="moviesingle.html">{props.titulo} <span>(2012)</span></a></h6>
        <p className="rate"><i className="ion-android-star"></i><span>{props.calificacion}</span> /10</p>
        <p className="describe">{props.descripcion}</p>
        <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
        <p>Director: <a href="#">{props.director}</a></p>
        <p>Stars: <a href="#">{props.actores}</a> </p>
    </div>
</div></>
  )
}
