import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Linking,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import {styles} from './styles';
import EditableBox from '../../../components/EditableBox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../utils/color';
import Button from '../../../components/Button';

const Settings = ({navigation}: any) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [values, setValues] = useState({
    name: 'Anish Sharma',
    email: 'anish@gmail.com',
  });

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };

  const onChange = (key: any, value: any) => {
    setValues(V => ({...V, [key]: value}));
  };

  const onItemPress = () => {
    Linking.openURL('https://www.github.com/imanda03');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header showBack onBackPress={goBack} title="Settings" />
      <ScrollView style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <AntDesign name="edit" color={colors.blue} size={24} />
          </Pressable>
        </View>

        <EditableBox
          label="Name"
          onChnageText={v => onChange('name', v)}
          value={values.name}
          editable={editing}
        />
        <EditableBox
          label="Email"
          onChnageText={v => onChange('email', v)}
          value={values.email}
          editable={editing}
        />
        {editing ? (
          <Button style={styles.button} title="Save" onPress={onSave} />
        ) : null}

        <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy and Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
