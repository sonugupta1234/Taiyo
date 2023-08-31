
import { MapContainer, TileLayer, Marker,  Tooltip } from 'react-leaflet';
import { CovidCountry } from '../CovidCountry';
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';

interface Data {
    countryData: CovidCountry;
}


const icon=new Icon({
   iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzGOGfTpIA_VY1wKCckqUX7kG742X-NMksMRn7ynwcb9jmj8a",
   iconSize: [32,32]
})



export const CovidMap = ({countryData}: Data) => {
    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ width: '100%', height: '320px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {countryData.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={icon}
            >
              <Tooltip>
                <div>
                  <h2>{country.country}</h2>
                  <p>Active: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      );
}
