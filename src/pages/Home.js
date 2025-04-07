import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/general/ProductCard'; 
import CustomButton from '../components/elements/CustomButton';

const products = [
  { id: '1', name: 'Tahu Organik', price: 5000 },
  { id: '2', name: 'Tempe Organik', price: 7000 },
  { id: '3', name: 'Susu Kedelai', price: 10000 },
  { id: '4', name: 'Keripik Tempe', price: 8000 },
];

export default function Home() {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <ProductCard
      product={item}
      onDetail={() => navigation.navigate('ProductDetail', { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produk Kami</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.cartButtonContainer}>
        <CustomButton
          title={`Lihat Keranjang (${cart.length})`}
          onPress={() => navigation.navigate('Cart')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  cartButtonContainer: { marginTop: 20 },
});