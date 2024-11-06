import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Clock, Ruler, TrendingUp, TrendingDown } from 'lucide-react';
import L from 'leaflet';

// Corrigir o ícone do marcador do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Componente para ajustar o zoom do mapa
function MapController({ markers }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 2) {
      const bounds = L.latLngBounds(markers.map(marker => marker.position));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [markers, map]);

  return null;
}

export default function MapSection() {
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [markers, setMarkers] = useState([]);
  const [routePath, setRoutePath] = useState([]);
  const [routeInfo, setRouteInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'SUA_API_KEY_AQUI'; // Substitua pela sua chave do OpenRouteService

  const getCoordinates = async (address) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await res.json();
      if (data[0]) {
        return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
      }
      throw new Error('Endereço não encontrado');
    } catch (error) {
      throw new Error('Erro ao buscar coordenadas');
    }
  };

  const getRoute = async (start, end) => {
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?overview=full&geometries=geojson`
      );

      if (!response.ok) {
        throw new Error('Erro na requisição');
      }

      const data = await response.json();

      if (data.routes && data.routes[0]) {
        const route = data.routes[0];
        return {
          coordinates: route.geometry.coordinates.map(coord => [coord[1], coord[0]]),
          distance: route.distance,
          duration: route.duration,
     
        };
      }
      throw new Error('Rota não encontrada');
    } catch (error) {
      console.error('Erro ao calcular rota:', error);
      throw new Error('Erro ao calcular rota');
    }
};

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);

      // Obter coordenadas
      const startCoords = await getCoordinates(startPoint);
      const endCoords = await getCoordinates(endPoint);

      // Atualizar marcadores
      const newMarkers = [
        { position: [endCoords[1], endCoords[0]], popup: 'Destino' },
        { position: [startCoords[1], startCoords[0]], popup: 'Partida' }
      ];
      setMarkers(newMarkers);

      // Obter e processar rota
      const route = await getRoute(startCoords, endCoords);
      setRoutePath(route.coordinates);
      const distanceInKm = parseFloat((route.distance / 1000).toFixed(2));
      const timeInMinutes = Math.ceil((distanceInKm / 20) * 60);

      setRouteInfo({
        distance: (route.distance / 1000).toFixed(2), // km
        duration: timeInMinutes, 
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} min`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      if (remainingMinutes === 0) {
        return `${hours}h`;
      }
      return `${hours}h ${remainingMinutes}min`;
    }
  };

  return (
    <section id="mapa" className="bg-neutral py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-center text-primary text-3xl font-bold mb-12">
          CONFIRA AS MELHORES VIAS PRÓXIMAS DE VOCÊ!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            {/* Formulário */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ponto de partida"
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 pl-10"
                  />
                  <Navigation className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Destino"
                    value={endPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 pl-10"
                  />
                  <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-red-500" />
                </div>

                <button
                  onClick={handleSearch}
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg 
                           hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  {loading ? 'Buscando...' : 'BUSCAR'}
                </button>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </div>
            </div>

            {/* Informações da Rota */}
            {routeInfo && (
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <h3 className="font-bold text-lg text-primary">Informações da Rota</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Ruler className="text-primary" size={20} />
                    <span>Distância: {routeInfo.distance} km</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    <span>Tempo estimado: {formatTime(routeInfo.duration)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mapa */}
          <div className="lg:col-span-2 h-[600px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={[-23.5505, -46.6333]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {markers.map((marker, idx) => (
                <Marker key={idx} position={marker.position}>
                  <Popup>{marker.popup}</Popup>
                </Marker>
              ))}
              {routePath.length > 0 && (
                <Polyline
                  positions={routePath}
                  color="#00A3E0"
                  weight={4}
                  opacity={0.7}
                />
              )}
              <MapController markers={markers} />
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}