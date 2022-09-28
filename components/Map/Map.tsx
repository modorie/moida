import { useEffect } from 'react'

import { MapContainer } from './Map.styled'
import { MapProps } from './Map.types'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any
  }
}

const Map = ({ latitude, longitude }: MapProps) => {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`

    console.log(
      'process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY',
      process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY
    )

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        }
        const map = new window.kakao.maps.Map(container, options)
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
      })
    }
    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [latitude, longitude])

  return <MapContainer id="map" />
}

export default Map
