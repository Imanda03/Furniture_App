import {FlatList, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import CategoryBox from '../../../components/CategoryBox';
import {products} from '../../../data/products';
import ProductHomeItem from '../../../components/ProductHomeItem';
import {useEffect, useState} from 'react';

interface CategoryItem {
  id: any;
  title: string;
  image: string;
}

interface RenderCategoryItemProps {
  item: CategoryItem;
  index: number;
}

interface ProductItem {
  title: string;
  image: string;
  category: any;
  price: string;
  description?: string;
}

interface RenderProductItemProps {
  item: ProductItem;
  index: number;
}

const Home = ({navigation}: any) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setkeyword] = useState<string>();
  const [filteredProduct, setFilterProduct] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProduct = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilterProduct(updatedProduct);
    } else if (selectedCategory && keyword) {
      const updatedProduct = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilterProduct(updatedProduct);
    } else if (!selectedCategory && keyword) {
      const updatedProduct = products.filter(product =>
        product?.title.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilterProduct(updatedProduct);
    } else if (!selectedCategory && !keyword) {
      setFilterProduct(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}: RenderCategoryItemProps) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };

  const renderProductItem = ({item, index}: RenderProductItemProps) => {
    const onProductPress = (product: any) => {
      navigation.navigate('ProductDetails', {product});
    };
    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header
        showSearch
        onSearch={setkeyword}
        keyword={keyword}
        title="Find All You Need"
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />

      <FlatList
        style={styles.products}
        numColumns={2}
        data={filteredProduct}
        renderItem={renderProductItem}
        keyExtractor={item => String(item.id)}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </SafeAreaView>
  );
};

export default Home;
