import React, { useState, useEffect } from 'react';
import Map from "./Mappin.jsx";
import E from "./Esj.jsx";
import Navs from './Navs';



const BikeRentals = () => {
    const [stations, setStations] = useState([]);
    const [filteredStations, setFilteredStations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [responseStatus, responseInfo] = await Promise.all([
                    fetch("https://gbfs.lyft.com/gbfs/2.3/chi/en/station_status.json"),
                    fetch("https://gbfs.lyft.com/gbfs/2.3/chi/en/station_information.json")
                ]);

                if (!responseStatus.ok || !responseInfo.ok) {
                    throw new Error("Failed to fetch data");
                }

                const dataStatus = await responseStatus.json();
                const dataInfo = await responseInfo.json();

                // Ensure the API response contains the expected structure
                if (!dataStatus.data || !dataStatus.data.stations || !dataInfo.data || !dataInfo.data.stations) {
                    throw new Error("Unexpected API response structure");
                }

                // Merge data from both responses based on station_id
                const mergedData = dataStatus.data.stations.map(status => {
                    const info = dataInfo.data.stations.find(station => station.station_id === status.station_id);
                    
                    return {
                        ...status,
                        name: info ? info.name : "Unknown",
                        capacity: info ? info.capacity : "N/A" // Ensure this is the correct path for capacity
                    };
                });

                setStations(mergedData);
                setFilteredStations(mergedData); // Initialize the filtered stations
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filtered = stations.filter(station => 
            station.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredStations(filtered);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
                    <Navs></Navs>

                    <E />

                    <Map />
            <input 
                            className="Spacer"

                type="text" 
                placeholder="Search stations..." 
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <ul className = "text">
                {filteredStations.map(station => (
                    <li key={station.station_id}>
                       <table>
                       <tbody>
                        <tr>
                            <td>{station.name}:</td>
                            <td>{station.num_ebikes_available}</td>
                            <td>/</td>
                            <td>{station.capacity}</td>
                            <td>Ebikes available</td>
                            <td> <a href="https://divvybikes.com/" target="_blank" rel="noopener noreferrer">
                <button className="button-custom">Book Through App</button>
            </a>
            
                            </td>
                            
                        </tr>
                        </tbody>
                       </table> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BikeRentals;