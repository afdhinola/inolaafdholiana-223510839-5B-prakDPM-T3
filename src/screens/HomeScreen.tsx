import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/globalStyles';
import ProductItem from '../components/ProdukPage';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  const categories = [
    { id: '1', title: 'FastFood', icon: 'fastfood', backgroundColor: '#FBCB77' },
    { id: '2', title: 'Drinks', icon: 'local-cafe', backgroundColor: '#E8D1A7' },
    { id: '3', title: 'Food', icon: 'local-restaurant', backgroundColor: '#DA8825' },
    { id: '4', title: 'Happy', icon: 'sentiment-very-satisfied', backgroundColor: '#E9CF99' },
  ];

  const products = [
    { id: '1', title: 'Churros', image: require('../../assets/food1.png')},
    { id: '2', title: 'Beef Burger', image: require('../../assets/food2.png') },
    { id: '3', title: 'Fried Rice', image: require('../../assets/food4.png') },
    { id: '4', title: 'Lemon Tea', image: require('../../assets/drinks.png') },
  ];

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Are You Hungry?</Text>
        <TouchableOpacity>
          <Icon name="dehaze" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Your Mood!"
        placeholderTextColor="#B0B0B0"
      />

      {/* Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        renderItem={({ item }) => (
          <View style={[styles.categoryItem, { backgroundColor: item.backgroundColor }]}>
            <Icon name={item.icon} size={32} color="#5E3023" />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popular */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem title={item.title} image={item.image} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#43231b'
  },
  searchBar: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#F8A44C',
    fontSize: 14,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 4,
    borderRadius: 50,
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  categoryTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
    color: '#8c523b',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 32,
  },
});