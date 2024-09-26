import { View, FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@components/ProductListItems'



export default function TabOneScreen() {
  const product = products[0];

  return (
    <>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </>
  );
}


