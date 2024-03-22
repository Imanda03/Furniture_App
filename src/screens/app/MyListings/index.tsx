import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';
import React, { useState } from 'react';
import DialogBox from '../../../components/DialogBox';

interface ProductItem {
  title: string;
  image: any;
  category: any;
  price: string;
  description?: string;
}

interface RenderProductItemProps {
  item: ProductItem;
  index: number;
}

const MyListings = ({ navigation }: any) => {
  const [showDialog, setShowDialog] = useState(false)
  const renderItem = ({ item }: RenderProductItemProps) => {
    const onIconPressed = () => {
      // console.log('first')
      <DialogBox title='Product Delete' description='Are you sure you want to delete?' showDialog={true} setShowDialog={setShowDialog} />;
    }
    const onProductPress = () => {
      navigation.navigate('ProductDetails', { product: item });
    };
    return <FavouriteItem icon={'trash'} onPress={onProductPress} {...item} onIconClick={onIconPressed} />;
  };

  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView>
      <Header title="MyListings" showBack onBackPress={goBack} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
      <DialogBox title='Product Delete' description='Are you sure you want to delete?' showDialog={true} setShowDialog={setShowDialog} />
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
