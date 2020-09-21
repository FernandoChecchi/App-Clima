import React from "react";

export default function Ciudad({city}) {
    if (!city) return <h2>Ciudad no encontrada</h2>;
    return (
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">{city.name}</h2>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item list-group-item-dark">Temperatura: {city.temp} ºC</li>
                            <li class="list-group-item ">Clima: {city.weather}</li>
                            <li class="list-group-item list-group-item-dark">Viento: {city.wind} km/h</li>
                            <li class="list-group-item">Cantidad de nubes: {city.clouds}</li>
                            <li class="list-group-item list-group-item-dark">Latitud: {city.latitud}º</li>
                            <li class="list-group-item">Longitud: {city.longitud}º</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}