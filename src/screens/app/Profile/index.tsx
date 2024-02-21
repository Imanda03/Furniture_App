import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import React from 'react';
const Profile = ({navigation}: any) => {
  const num = 10;
  const onLogout = () => {
    console.log('Log out clicked');
  };

  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const onNewListingsPress = () => {
    navigation.navigate('CreateListings');
  };
  const onMyListingPress = () => {
    navigation.navigate('MyListings');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" onLogout={onLogout} showLogout />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email</Text>

          <ListItem
            onPress={onMyListingPress}
            title="My Listings"
            subtitle={`You have ${num} listings`}
          />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle="Account, FAQ, Contact"
          />
        </View>

        <Button
          onPress={onNewListingsPress}
          style={{flex: 0}}
          title="Add New Listing"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
