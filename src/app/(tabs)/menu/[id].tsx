import { useLocalSearchParams } from "expo-router";
import { View, Text } from 'react-native';

const ProductDetailList = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Product Detail for ID: {id}</Text>
        </View>
    );
};

export default ProductDetailList;
