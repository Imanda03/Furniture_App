import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Linking,
  Pressable,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../components/Header';
import { styles } from './styles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../../utils/color';
import Input from '../../../components/Input';
import { categories } from '../../../data/categories';
import Button from '../../../components/Button';

interface OptionsProps {
  mediaType: any;
  quality: any;
}

const CreateListings = ({ navigation }: any) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<any>({});
  const goBack = () => {
    navigation.goBack();
  };

  const options: OptionsProps = {
    mediaType: 'photo',
    quality: 1,
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await launchImageLibrary(options);
    if (result?.assets?.length) {
      setImages(list => [...list, ...result.assets]);
      setLoading(false);
    }
  };

  const onDeleteImage = (image: any) => {
    setImages((list): any => {
      const filteredImages = list.filter(
        (img: any) => img?.fileName !== image?.fileName,
      );
      return filteredImages;
    });
  };

  const onChange = (value: any, key: string) => {
    setValues((val: any) => ({ ...val, [key]: value }));
  };

  console.log(values);

  return (
    <SafeAreaView>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a new listing
      "
      />

      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text style={styles.sectionTitle}>Upload Photos</Text>

          <View style={styles.imageRow}>
            <TouchableOpacity
              disabled={loading}
              style={styles.uploadContainer}
              onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
            {images?.map((image: any) => (
              <View style={styles.imageCont} key={image?.fileName}>
                <Image style={styles.image} source={{ uri: image?.uri }} />
                <Pressable hitSlop={2} onPress={() => onDeleteImage(image)}>
                  <Entypo
                    style={styles.delete}
                    name="cross"
                    size={24}
                    color={colors.gray}
                  />
                </Pressable>
              </View>
            ))}
          </View>

          <Input
            placeholder="Listing Title"
            label="Title"
            value={values.title}
            onChangeText={v => onChange(v, 'title')}
          />

          <Input
            placeholder="Select the category"
            label="Category"
            value={values.category}
            onChangeText={v => onChange(v, 'category')}
            type="picker"
            options={categories}
          />

          <Input
            placeholder="Enter price in USD"
            label="Price"
            value={values.price}
            onChangeText={v => onChange(v, 'price')}
            keyboardType="numeric"
          />

          <Input
            placeholder="Tell us more..."
            label="Description"
            value={values.description}
            onChangeText={v => onChange(v, 'description')}
            multiline={true}
            style={styles.textarea}
          />
        </KeyboardAvoidingView>
        <Button title="Submit" style={styles.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateListings;
