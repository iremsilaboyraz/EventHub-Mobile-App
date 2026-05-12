import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const FavoritesScreen = () => {
  // 5 Etkinlik - Resimler için hem yerel (require) hem güvenli linkler
  const favoriteEvents = [
    { 
      id: '1', 
      title: 'Startup Pitch Night', 
      category: 'Tech',
      quota: '15 Spots Left',
      isRegistered: false,
      // EĞER assets KLASÖRÜNE event1.jpg KOYDUYSAN ŞUNU KULLAN: require('../assets/event1.jpg')
      // ŞİMDİLİK EN GARANTİ İNTERNET LİNKİYLE DEĞİŞTİRDİM:
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500' 
    },
    { 
      id: '2', 
      title: 'Global Design Forum', 
      category: 'Design',
      quota: '5 Spots Left',
      isRegistered: true, 
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500' 
    },
    { 
      id: '3', 
      title: 'Marketing Summit', 
      category: 'Business',
      quota: 'Full',
      isRegistered: false,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500'
    },
    { 
      id: '4', 
      title: 'Mobile App Workshop', 
      category: 'Tech',
      quota: '22 Spots Left',
      isRegistered: true,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500'
    },
    { 
      id: '5', 
      title: 'AI & Future Trends', 
      category: 'Tech',
      quota: '8 Spots Left',
      isRegistered: false,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500'
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: item.image }} 
          style={styles.image}
          resizeMode="cover"
        />
        {item.isRegistered && (
          <View style={styles.registeredBadge}>
            <Text style={styles.badgeText}>Also Registered</Text>
          </View>
        )}
      </View>
      
      <View style={styles.cardContent}>
        <View style={styles.textDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>Category: {item.category}</Text>
          <Text style={styles.quota}>
            Quota: <Text style={item.quota === 'Full' ? styles.quotaRed : styles.quotaGreen}>{item.quota}</Text>
          </Text>
        </View>
        
        <TouchableOpacity style={styles.removeButton}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Favorites</Text>
      <FlatList
        data={favoriteEvents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFC',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#000',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    width: '100%',
    height: 160, // Görseli biraz daha belirginleştirdik
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 12,
    backgroundColor: '#E1E1E1', // Resim yüklenene kadar gri alan
  },
  image: {
    width: '100%',
    height: '100%',
  },
  registeredBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#FFE8D6', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  category: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  quota: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
  },
  quotaGreen: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  quotaRed: {
    color: '#F44336',
    fontWeight: '600',
  },
  removeButton: {
    backgroundColor: '#FADADD', 
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EAB8C0',
  },
  removeText: {
    color: '#000',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default FavoritesScreen;