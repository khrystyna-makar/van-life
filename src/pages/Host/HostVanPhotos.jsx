import React from "react"
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {

    const { currentVan } = useOutletContext();

    return (
        <div className="">
          <img src={currentVan.imageUrl} className="host-van-detail-image" />
        </div>
    )
}