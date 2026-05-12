import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  // Etkinlik verileri - En hızlı yüklenen görseller
  const registeredEvents = [
    { 
      id: '1', 
      title: 'StartUp Pitch', 
      category: 'Tech', 
      image: { uri: 'https://picsum.photos/id/1/200/200' } 
    },
    { 
      id: '2', 
      title: 'StartUp Pitch', 
      category: 'Tech', 
      image: { uri: 'https://picsum.photos/id/10/200/200' } 
    },
  ];

  return (
    <View style={styles.container}>
      {/* Üst Pembe Kavisli Alan */}
      <View style={styles.topHeader} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Profil Bölümü */}
        <View style={styles.profileImageContainer}>
        <Image 
  source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' }} 
  style={styles.profileImage}
/>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.name}>Emily J.</Text>
          <Text style={styles.email}>email@eventhub.com</Text>
        </View>

        {/* İstatistik Kartları */}
        <View style={styles.statsWrapper}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Events joined</Text>
            <Text style={styles.statNumber}>7</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Favorites</Text>
            <Text style={styles.statNumber}>12</Text>
          </View>
        </View>

        {/* Liste Başlığı */}
        <Text style={styles.sectionTitle}>Registered Events</Text>

        {/* Etkinlik Listesi */}
        {registeredEvents.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Image source={event.image} style={styles.eventImage} />
            <View style={styles.eventDetails}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventCategory}>Category: {event.category}</Text>
            </View>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFC',
  },
  topHeader: {
    height: 150,
    backgroundColor: '#FFB6C1', 
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  scrollContent: {
    paddingTop: 80,
    paddingBottom: 100,
  },
  profileImageContainer: {
    alignItems: 'center',
    zIndex: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#FDE2E4',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  email: {
    fontSize: 15,
    color: '#444',
    marginTop: 4,
  },
  statsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: 'white',
    width: '46%',
    paddingVertical: 18,
    borderRadius: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666',
    marginBottom: 6,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 25,
    marginBottom: 15,
    color: '#000',
  },
  eventCard: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    marginBottom: 15,
    borderRadius: 22,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  eventImage: {
    width: 65,
    height: 65,
    borderRadius: 15,
    backgroundColor: '#EEE',
  },
  eventDetails: {
    flex: 1,
    marginLeft: 15,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  eventCategory: {
    fontSize: 13,
    color: '#777',
    marginTop: 3,
  },
  cancelButton: {
    backgroundColor: '#FFB6C1',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 12,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ProfileScreen;