import React from "react"
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {

    const { currentVan } = useOutletContext();

    return (
        <div className="">
           <p> <span className="bold-text">Name: </span> {currentVan.name} </p>
           <p> <span className="bold-text">Category: </span> {currentVan.type} </p>
           <p> <span className="bold-text">Description: </span> {currentVan.description} </p>
           <p> <span className="bold-text">Visibility: </span> Public </p>
        </div>
    )
}