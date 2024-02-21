import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Button from '../../../components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageCarsousel from '../../../components/ImageCarsousel';
import {Linking} from 'react-native';
import {colors} from '../../../utils/color';

const ProductDetails = ({route, navigation}: any) => {
  const product = route?.params?.product || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    //Make a phone call
    const phone = '+9779803708637';
    Linking.openURL(`tel: ${phone}`);

    //Send a email
    const email = 'asis03ktm@gmail.com';
    Linking.openURL(`mailto: ${email}`);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarsousel images={product.images} />
        ) : (
          <Image style={styles.Image} source={{uri: product.image}} />
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.descrisption}>{product.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <FontAwesome name="arrow-left" size={20} color={colors.blue} />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <FontAwesome name="bookmark-o" size={24} />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
