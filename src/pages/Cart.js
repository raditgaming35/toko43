import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
  const { cart } = useContext(CartContext);
  const navigation = useNavigation();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name} (x{item.quantity})</Text>
      <Text style={styles.price}>
        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang Belanja</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Keranjang kosong</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => item.id + index}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
          <Text style={styles.total}>Total: Rp {total.toLocaleString('id-ID')}</Text>
          <Button title="Lanjut ke Pembayaran" onPress={() => navigation.navigate('Checkout')} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  empty: { fontSize: 18, textAlign: 'center', marginTop: 50, color: 'gray' },
  list: { paddingBottom: 16 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomColor: '#ccc', borderBottomWidth: 1 },
  name: { fontSize: 16 },
  price: { fontSize: 16, fontWeight: 'bold', color: 'green' },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 16, textAlign: 'right' },
});