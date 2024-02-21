import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {products} from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';
import React from 'react';

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

const Favourites = ({navigation}: any) => {
  const renderItem = ({item}: RenderProductItemProps) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return <FavouriteItem onPress={onProductPress} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header title="Favourites" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favourites);
