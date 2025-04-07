import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState('1');

  const handleAddToCart = () => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      Alert.alert('Jumlah tidak valid', 'Masukkan jumlah minimal 1');
      return;
    }

    addToCart({ ...product, quantity: qty });
    Alert.alert('Berhasil', 'Produk ditambahkan ke keranjang');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rp {product.price.toLocaleString('id-ID')}</Text>

      <Text style={styles.label}>Jumlah:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Button title="Tambah ke Keranjang" onPress={handleAddToCart} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 18, marginVertical: 8 },
  label: { marginTop: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
});