import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [money, setMoney] = useState('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePayment = () => {
    const paid = parseInt(money);
    if (isNaN(paid) || paid < total) {
      Alert.alert('Uang tidak cukup', `Total belanja: Rp ${total.toLocaleString('id-ID')}`);
      return;
    }

    const change = paid - total;
    Alert.alert('Pembayaran berhasil', `Kembalian Anda: Rp ${change.toLocaleString('id-ID')}`);
    clearCart();
    setMoney('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.total}>Total: Rp {total.toLocaleString('id-ID')}</Text>

      <TextInput
        placeholder="Masukkan nominal uang Anda"
        keyboardType="numeric"
        value={money}
        onChangeText={setMoney}
        style={styles.input}
      />

      <Button title="Bayar Sekarang" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  total: { fontSize: 20, marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 20 },
});