import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import config from '../config/config.json';

function StockList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
        .then(response => response.json())
        .then(result => setProducts(result.data));
    }, []);

    const list = products.map((product, index) => <Text style={{borderWidth: 5, margin: 5, padding: 5}} key={index}>{`Name: ${product.name}` + `\nStock: ${product.stock}`}</Text>);

    return (
        <View>
            {list}
        </View>
    );
}

export default function Stock() {
    return (
        <View>
            <Text style={{margin: 7, padding: 7, color: '#333', fontSize: 24}}>Inventory</Text>
            <StockList/>
        </View>
    );
}
