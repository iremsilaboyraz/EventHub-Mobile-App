import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useEvents } from '../context/EventContext';
import { useTheme } from '../context/ThemeContext'; // Tema hook'u

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const { registrations, favorites, unregister } = useEvents();
  const { theme, toggleTheme } = useTheme(); // toggleTheme'i buraya ekledik

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Arka Plan Pembe Şerit */}
      <View style={[styles.topPinkBar, { backgroundColor: theme.isDarkMode ? '#442222' : '#F9C2CD' }]} />

      <View style={styles.content}>
        
        {/* TEST BUTONU: Arkadaşın Settings ekranını bitirince bunu silebilirsin */}
        <TouchableOpacity 
          onPress={toggleTheme} 
          style={[styles.testButton, { backgroundColor: theme.isDarkMode ? '#FFF' : '#333' }]}
        >
          <Text style={{ color: theme.isDarkMode ? '#333' : '#FFF', fontSize: 10, fontWeight: 'bold' }}>
            {theme.isDarkMode ? 'LIGHT MODE YAP' : 'DARK MODE YAP'}
          </Text>
        </TouchableOpacity>

        {/* Profil Bilgileri */}
        <View style={styles.profileHeader}>
          <View style={[styles.avatarContainer, { backgroundColor: theme.card }]}>
            <Image 
              source={{ uri: 'https://via.placeholder.com/100' }} 
              style={styles.avatar} 
            />
          </View>
          <Text style={[styles.userName, { color: theme.text }]}>Emily J.</Text>
          <Text style={[styles.userEmail, { color: theme.subText }]}>email@eventhub.com</Text>
        </View>

        {/* İstatistik Kutuları */}
        <View style={styles.statsRow}>
          <View style={[styles.statBox, { backgroundColor: theme.card }]}>
            <Text style={[styles.statLabel, { color: theme.text }]}>Events joined</Text>
            <Text style={[styles.statNumber, { color: theme.primary }]}>{registrations.length}</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: theme.card }]}>
            <Text style={[styles.statLabel, { color: theme.text }]}>Favorites</Text>
            <Text style={[styles.statNumber, { color: theme.primary }]}>{favorites.length}</Text>
          </View>
        </View>

        <Text style={[styles.listHeader, { color: theme.text }]}>Registered Events</Text>

        <FlatList
          data={registrations}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <View style={[styles.eventCard, { backgroundColor: theme.card }]}>
              <View style={styles.eventInfo}>
                <View style={styles.eventImagePlaceholder} />
                <View style={styles.eventText}>
                  <Text style={[styles.eventTitle, { color: theme.text }]}>{item.title}</Text>
                  <Text style={[styles.eventCategory, { color: theme.subText }]}>Category:{item.category}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => unregister(item.id)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={<Text style={[styles.emptyText, { color: theme.subText }]}>Henüz kayıtlı etkinlik yok.</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  topPinkBar: { height: 120, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, position: 'absolute', width: '100%' },
  testButton: { 
    alignSelf: 'flex-end', 
    marginRight: 20, 
    padding: 8, 
    borderRadius: 10, 
    marginTop: 10,
    elevation: 5,
    zIndex: 10 // Üstte görünmesi için
  },
  content: { flex: 1, marginTop: 40 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  avatarContainer: { width: 110, height: 110, borderRadius: 55, justifyContent: 'center', alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  userName: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  userEmail: { fontSize: 14 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 30 },
  statBox: { width: width * 0.4, padding: 15, borderRadius: 20, alignItems: 'center', elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  statLabel: { fontSize: 13, fontWeight: '600' },
  statNumber: { fontSize: 22, fontWeight: 'bold', marginTop: 5 },
  listHeader: { fontSize: 18, fontWeight: 'bold', marginLeft: 25, marginBottom: 15 },
  eventCard: { marginHorizontal: 20, marginBottom: 15, padding: 12, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 },
  eventInfo: { flexDirection: 'row', alignItems: 'center' },
  eventImagePlaceholder: { width: 60, height: 60, borderRadius: 15, backgroundColor: '#333' },
  eventText: { marginLeft: 12 },
  eventTitle: { fontWeight: 'bold', fontSize: 15 },
  eventCategory: { fontSize: 12 },
  cancelBtn: { backgroundColor: '#FADADD', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 15 },
  cancelBtnText: { color: '#D81B60', fontWeight: 'bold', fontSize: 12 },
  emptyText: { textAlign: 'center', marginTop: 20 }
});

export default ProfileScreen;