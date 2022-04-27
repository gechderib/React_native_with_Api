import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const axios = require("axios");
const url = "http://reactnative.dev/movies.json";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAllMovies() {
    try {
      const response = await axios.get(url, {
        headers: { "content-type": "application/json" },
      });

      const data = response.data;
      if (data) {
        console.log("data is loaded ");
        setIsLoading(false);
        setMovies(data.movies);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllMovies();
  }, []);

  if (isLoading) {
    console.log("yes it is loading");
    return (
      <View>
        <Text>Loading movies</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.alllist}
        keyExtractor={(item, index) => item.id}
        data={movies}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.touchList}>
              <Text style={styles.item}>Title: {item.title}</Text>
              <Text style={styles.item}>Year: {item.releaseYear}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 10,
  },
  alllist: {
    width: "100%",
  },
  item: {
    padding: 10,
    color: "white",
    fontSize: 15,
    width:"50%"
  },
  touchList: { 
    flexDirection:"row",
    marginBottom: 5, 
    backgroundColor: "#aaa" 
  },
});
