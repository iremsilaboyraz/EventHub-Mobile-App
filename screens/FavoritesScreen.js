import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useEvents } from '../context/EventContext';
import { useTheme } from '../context/ThemeContext'; // Tema hook'u

const { width } = Dimensions.get('window');

const FavoritesScreen = () => {
  const { favorites, removeFavorite } = useEvents();
  const { theme } = useTheme(); // Tema verilerini çekiyoruz

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Üst Başlık Alanı */}
      <View style={[styles.headerContainer, { borderBottomColor: theme.isDarkMode ? '#333' : '#eee' }]}>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Your Favorites</Text>
      </View>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={[styles.favCard, { backgroundColor: theme.card }]}>
            {/* Görsel Alanı (Figma'daki koyu gri alan) */}
            <View style={styles.imageContainer}>
              <View style={[styles.placeholderImg, { backgroundColor: theme.isDarkMode ? '#333' : '#444' }]} />
              {item.isRegistered && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>Also Registered</Text>
                </View>
              )}
            </View>

            {/* Kart İçeriği */}
            <View style={styles.cardBody}>
              <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
              <Text style={[styles.infoText, { color: theme.subText }]}>Category: {item.category}</Text>
              <Text style={[styles.infoText, { color: theme.subText }]}>
                Quota: <Text style={{ color: '#4CAF50', fontWeight: 'bold' }}>{item.stock} Spots Left</Text>
              </Text>
              
              {/* Kaldır Butonu */}
              <TouchableOpacity 
                style={styles.removeBtn} 
                onPress={() => removeFavorite(item.id)}
              >
                <Text style={styles.removeBtnText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.emptyText, { color: theme.subText }]}>Henüz favori eklemediniz.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: { 
    paddingVertical: 20, 
    alignItems: 'center', 
    borderBottomWidth: 1,
    marginTop: 10
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  favCard: { 
    marginHorizontal: 20, 
    marginTop: 20, 
    borderRadius: 25, 
    overflow: 'hidden', 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 10,
    position: 'relative'
  },
  imageContainer: { height: 160, width: '100%' },
  placeholderImg: { flex: 1 },
  badge: { 
    position: 'absolute', 
    top: 15, 
    left: 15, 
    backgroundColor: '#FFEBCD', 
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    borderRadius: 12 
  },
  badgeText: { fontSize: 10, fontWeight: 'bold', color: '#8B4513' },
  cardBody: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  infoText: { fontSize: 14, marginBottom: 2 },
  removeBtn: { 
    position: 'absolute', 
    right: 20, 
    bottom: 20, 
    backgroundColor: '#FADADD', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    borderRadius: 15 
  },
  removeBtnText: { color: '#D81B60', fontWeight: 'bold', fontSize: 13 },
  emptyContainer: { alignItems: 'center', marginTop: 100 },
  emptyText: { fontSize: 16 }
});

export default FavoritesScreen;