import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function ProductCard({ product, onDetail }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onDetail}>
      <ImageBackground
        source={require('../../../assets/dmc_bg.jpg')} 
        style={styles.background}
        imageStyle={{ borderRadius: 12 }}
      >
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Rp {product.price.toLocaleString('id-ID')}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 5,
  },
  background: {
    padding: 20,
    backgroundColor: '#1a1a1a', 
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff3b3b',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  price: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 6,
  },
});