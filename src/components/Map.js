import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Address } from '../redux/slices/userData';



function LocationMarker({mylat,mylng}) {
  const [location, setLocation] = useState(null);
  const dispatch=useDispatch()
  const map = useMap();
  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setLocation([lat, lng]);

  
   
  };


  useMapEvents({
    click: handleMapClick,
  });
  delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: icon,
      iconUrl: icon,
      shadowUrl: iconShadow,
    });
    useEffect(() => {
      if (location) {
        const fetchData = async () => {
          try {
            const [lat, lng] = location;
             // const {userlocation}=useSelector((state)=>state.userData)
        
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
            const data = response.data.address;
            const { road, village, city } = data;
            const address = `${road}, ${village}, ${city}`;
            // Dispatch the address or perform any action with the address
            dispatch(Address(address))
            console.log(address);
          } catch (error) {
            console.error('Error getting address:', error);
          }
        };
  
        fetchData();
      }
    }, [location,dispatch]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(latitude,longitude)
          setLocation([latitude, longitude]);
          map.flyTo([latitude, longitude], 13); // Fly to the location with zoom level 13
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
    if(mylat&&mylng){
      map.flyTo([mylat, mylng], 13);
    }
  }, [map,mylat,mylng]);

  console.log(location)
    return location === null ? null : <Marker position={location} draggable={true} ></Marker>
    
}

function Map({currentlat,currentlng}) {
 
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      // onClick={(event) => setLocation([event.latlng.lat, event.latlng.lng])}

    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors"
      />
      <LocationMarker mylat={currentlat} mylng={currentlng} />
    </MapContainer >
  );
}

export default Map;




