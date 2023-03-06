import React from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {

    const [vans, setVans] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type");

    React.useEffect(function() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const filteredVans = typeFilter ? vans.filter(v => v.type.toLowerCase() === typeFilter) : vans;

    const vanElements = filteredVans.map(van => {
        return (
            <div key={van.id} className="van-tile">
             <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div> 
    )
    })
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button onClick={() => setSearchParams({type: "simple"})} className="van-type simple">Simple</button>
                <button onClick={() => setSearchParams({type: "luxury"})} className="van-type luxury">Luxury</button>
                <button onClick={() => setSearchParams({type: "rugged"})} className="van-type rugged">Rugged</button>

                { typeFilter ? (<button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear filter</button>) : null }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )

  
};