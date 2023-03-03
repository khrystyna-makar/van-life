import React from "react"
import { Link } from "react-router-dom"

export default function Vans() {

    const [vansData, setVansData] = React.useState([])

    React.useEffect(function() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    console.log(vansData);

    const vanElements = vansData.map(van => {
        return (
        <Link to={`/vans/${van.id}`}>
            <div key={van.id} className="van-tile">
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div> 
        </Link>
    )
    })
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )

  
};