import React from "react"
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {

    const { currentVan } = useOutletContext();

    return (
        <div className="">
        <h3>${currentVan.price} <span>/day </span></h3>
        </div>
    )
}