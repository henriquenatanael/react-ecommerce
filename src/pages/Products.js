import React, {Component} from 'react';
import listItem from '../utils/ProductList';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

class Products extends Component {
    
    render() {
        return(
            <div className='product-list'>
            {listItem.map((item, index) => (
                <div key={index} className='product-item'>
                    <Link to={`products/${item.sku}`} ><img src={item.image} alt='product-item'/></Link>
                    <h4 style={{margin: '10px 0'}} >{item.name}</h4>
                    <Rating name="half-rating-read" 
                        defaultValue={item.rating} 
                        precision={0.5} 
                        readOnly 
                    />
                    <p style={{margin: 0}} >CAD {item.price}</p>
                        </div>
                    ))}
                </div>
        )
    }
}

export default Products;
