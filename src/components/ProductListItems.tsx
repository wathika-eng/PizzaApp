import { StyleSheet } from 'react-native';
import products from '@/assets/data/products';
import { Text, Image, Pressable } from 'react-native';
import { Product } from '../constants/Products';
import { Link } from 'expo-router';

type ProductListItemProps = {
    product: Product;
};

const fallbackImage = "https://m.media-amazon.com/images/I/51CDwZuW8rL._SX425_.jpg";

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`/product/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{ uri: product.image || fallbackImage }}
                    style={styles.image}
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>Ksh {product.price}</Text>
            </Pressable>
        </Link>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'top',
        // borderRadius: 20,
        // borderWidth: 1,
        // borderColor: 'black',
        // margin: 10,
        // padding: 10,
        // maxWidth: '50%',
    },
    title: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    price: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ProductListItem;