import Ionicons from "@expo/vector-icons/Ionicons";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MapScreen() {
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
    const [errorMsg, setErrorMsg] = useState("");
    const mapRef = useRef<MapView>(null);

    // Get device location
    const getDeviceLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            alert(errorMsg);
            return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);

        // Move camera to device location
        if (mapRef.current) {
            const region: Region = {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            };
            mapRef.current.animateToRegion(region, 800);
        }
    };


    useEffect(() => {
        getDeviceLocation();
    }, []);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                {location ? (
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <Marker coordinate={location} />
                    </MapView>
                ) : (
                    <ActivityIndicator size="large" style={{ marginTop: 100 }} />
                )}

                <TextInput
                    placeholder="Search location"
                    placeholderTextColor="gray"
                    style={styles.inputs}
                />


                <TouchableOpacity style={styles.locate} onPress={getDeviceLocation}>
                    <Ionicons name="locate" size={30} color="red" />
                </TouchableOpacity>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
    inputs: {
        position: "absolute",
        top: 60,
        left: 20,
        right: 20,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 10,
    },
    locate: {
        position: "absolute",
        bottom: 30,
        right: 20,
        height: 60,
        width: 60,
        backgroundColor: "#fff",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        elevation: 10,
    },
});
