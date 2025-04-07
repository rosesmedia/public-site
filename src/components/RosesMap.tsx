"use client"
import { useEffect, useRef, useState } from "react";
import mapboxgl, { Map, Popup, LngLatBounds } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox CSS for controls

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

const RosesMap = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);
    // Removed unused 'locations' state
    const [formattedLocations, setFormattedLocations] = useState<any[]>([]);
    const [userCoordinates, setUserCoordinates] = useState<[number, number] | null>(null);
    const [activeLocation, setActiveLocation] = useState<string | null>(null);
    const [currentPopup, setCurrentPopup] = useState<Popup | null>(null);
    

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [-1.055034237300904, 53.94578819348761],
            zoom: 15,
        });

        mapRef.current = map;

        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocation: true,
        });

        map.addControl(new mapboxgl.NavigationControl(), "top-right");
        map.addControl(geolocate, "top-right");

        geolocate.on("geolocate", (e) => {
            setUserCoordinates([e.coords.longitude, e.coords.latitude]);
        });

        map.on("load", () => {
            geolocate.trigger();

            map.addSource("locations", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: formattedLocations,
                },
                generateId: true,
            });

            map.addLayer({
                id: "locations",
                type: "circle",
                source: "locations",
                paint: {
                    "circle-radius": [
                        "case",
                        ["boolean", ["feature-state", "active"], false],
                        10,
                        6,
                    ],
                    "circle-color": "#ffffff",
                    "circle-stroke-width": 3,
                    "circle-stroke-color": "#000000",
                    "circle-opacity": 0.8,
                },
            });

            map.addLayer({
                id: "locations-labels",
                type: "symbol",
                source: "locations",
                minzoom: 12,
                layout: {
                    "text-field": "{name}",
                    "text-font": ["Poppins Medium"],
                    "text-size": 14,
                    "text-offset": [0, 1.5],
                    "text-anchor": "top",
                },
            });

            map.on("mouseenter", "locations", () => {
                map.getCanvas().style.cursor = "pointer";
            });

            map.on("mouseleave", "locations", () => {
                map.getCanvas().style.cursor = "";
            });

            map.on("click", "locations", (e) => {
                const geometry = e.features?.[0]?.geometry;
                const coordinates =
                    geometry && "coordinates" in geometry
                        ? (geometry.coordinates as [number, number])
                        : [];
                const name = e.features?.[0]?.properties?.name || "Unknown Location";
                let facilities = e.features?.[0]?.properties?.facilities || [];

                try {
                    facilities = JSON.parse(facilities);
                } catch {
                    facilities = [];
                }

                const facilitiesHTML =
                    facilities && facilities.length > 0
                        ? `<div class="flex flex-col gap-2"><h3>Facilities</h3><p>${facilities}</p></div>`
                        : "";

                const popup = new mapboxgl.Popup()
                    .setLngLat(
                        Array.isArray(coordinates) && coordinates.length === 2
                            ? (coordinates as [number, number])
                            : [-1.055034237300904, 53.94578819348761]
                    )
                    .setHTML(
                        `
                        <div class="flex flex-col p-1 gap-4">
                            <h2 class="text-2xl xcond">${name}</h2>
                            ${facilitiesHTML}
                            <div class="flex w-full justify-center">
                                <button id="directionsButton" class="bg-roses-red text-white px-6 py-2 rounded-full text-center hover:cursor-pointer">Directions</button>
                            </div>
                        </div>
                    `
                    )
                    .addTo(map);

                setCurrentPopup(popup);

                document.getElementById("directionsButton")?.addEventListener("click", () => {
                    if (coordinates.length === 2) {
                        getRoute(coordinates as [number, number]);
                    }
                });

                updateActiveLocation(e);
            });

            map.on("click", (e) => {
                const features = map.queryRenderedFeatures(e.point, {
                    layers: ["locations"],
                });

                if (!features.length && activeLocation) {
                    map.setFeatureState(
                        { source: "locations", id: activeLocation },
                        { active: false }
                    );
                    setActiveLocation(null);
                }
            });
        });

        return () => {
            map.remove();
        };
    }, [formattedLocations]);

    const updateActiveLocation = (location: any) => {
        if (activeLocation) {
            mapRef.current?.setFeatureState(
                { source: "locations", id: activeLocation },
                { active: false }
            );
        }

        const newActiveLocation = location.features[0].id;
        setActiveLocation(newActiveLocation);

        mapRef.current?.setFeatureState(
            { source: "locations", id: newActiveLocation },
            { active: true }
        );

        mapRef.current?.flyTo({
            center: location.features[0].geometry.coordinates,
            zoom: 15,
        });
    };

    const getRoute = async (destination: [number, number]) => {
        const start = userCoordinates || [-1.055034237300904, 53.94578819348761];
        const response = await fetch(
            `https://api.mapbox.com/optimized-trips/v1/mapbox/walking/${start[0]},${start[1]};${destination}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        const route = data.trips[0].geometry.coordinates;

        const geojson: GeoJSON.Feature<GeoJSON.Geometry> = {
            type: "Feature",
            properties: {},
            geometry: {
                type: "LineString",
                coordinates: route,
            },
        };

        if (mapRef.current?.getLayer("route")) {
            (mapRef.current.getSource("route") as any).setData(geojson);
        } else {
            mapRef.current?.addLayer({
                id: "route",
                type: "line",
                source: {
                    type: "geojson",
                    data: geojson,
                },
                layout: {
                    "line-join": "round",
                    "line-cap": "round",
                },
                paint: {
                    "line-color": "#307CBF",
                    "line-width": 5,
                    "line-opacity": 1,
                },
            });
        }

        currentPopup?.remove();
        setCurrentPopup(null);

        const bounds = new LngLatBounds();
        route.forEach((coord: [number, number]) => bounds.extend(coord));
        mapRef.current?.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 50, right: 50 },
            maxZoom: 15,
            duration: 1000,
        });
    };

    return <div id="map-container" ref={mapContainerRef} className="h-150" />;
};

export default RosesMap;
