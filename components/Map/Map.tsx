import { useEffect } from 'react'

import { MapContainer } from './Map.styled'
import { MapProps } from './Map.types'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any
  }
}

const Map = ({ latitude, longitude, level }: MapProps) => {
  useEffect(() => {
    const mapScript = document.createElement('script')
    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`
    document.head.appendChild(mapScript)

    mapScript.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level,
        }

        const map = new window.kakao.maps.Map(container, options)
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(latitude, longitude),
        })
        marker.setMap(map)
      })
    }
  }, [latitude, longitude, level])

  return <MapContainer id="map" />
}

export default Map
