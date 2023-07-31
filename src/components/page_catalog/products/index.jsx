import React, {useState, useEffect} from 'react';
import ProductCard from '../productCard';
import CircularProgress from '@mui/material/CircularProgress';
import Pagination from '@mui/material/Pagination';
import { useParams} from 'react-router-dom';
import Service from '../../services/service';
import SelectSort from '../selectSort';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import BackToHome from '../../wrapper_components/back _to_home';
import Filter from '../filter';
import { useMediaQuery } from 'react-responsive';
import s from './products.module.css';   

const Products = () => {
    const isPc = useMediaQuery({ minWidth: 769});
    const[mobFilter, setMobFilter] = useState(false);
    const changeMobFilterVisible = () => {
        setMobFilter(!mobFilter);
    }
    //pagination:
    const[page, setPage] = useState(1);
    const[pageQty, setQty] = useState(2);
    //sort
    const[sortValue, setSortValue] = useState('');
    const changeSortValue = (arg) => {
        setSortValue(arg);
    }  
    //show products
    const {category} = useParams('category');
    const {brand} = useParams('brand');
    const[data, setData] = useState(null);
    //filter
    const[filter, setFilter] = useState('');
    const changeFilter = (arg1, arg2) => {
        setFilter(`&price_gte=${arg1}&price_lte=${arg2}`)
    }

    useEffect(() => {
        new Service().getProducts(`catalog?category=${category}${brand ? `&brand=${brand}` : ''}&_page=${page}${sortValue}${filter}`)
        .then(data => setData(data));
        setQty(2);
        setMobFilter(false);
        // eslint-disable-next-line
    }, [category, brand, page, sortValue, filter]);

    return(
        <div className={s.position}> 
 
            <div className={s.drop}>
                {isPc && (
                    <div className={s.filer}>
                        <Filter changeFilter={changeFilter}/>
                    </div>
                )}
                {!isPc && (
                    <button onClick={changeMobFilterVisible} className={s.filter_button}> <FontAwesomeIcon icon={faSliders} />Фільтр</button>
                )}
                <SelectSort changeSortValue={changeSortValue}/>
            </div>
            {mobFilter &&(
                <div className={s.filter_mobile}>
                    <Filter changeFilter={changeFilter}/>
                </div>
            )}
            <div className={s.products__container}>
                    
                    {Array.isArray(data) ?
                    
                        data.length > 0 ? 

                            data.map((item)=>{
                                return(
                                <ProductCard  
                                    key={item.id} 
                                    id={item.id} 
                                    rating={item.rating}
                                    category={item.category}
                                    img={`${item.img[0]}`} 
                                    model={item.model} 
                                    brand={item.brand} 
                                    description={`${item.description}`}
                                    type={`${item.type}`} 
                                    price={`${item.price}`}
                                    reviews={`${item.reviews}`} />   
                                )
                            })
                            :   <BackToHome text={'Обрані товари відсутні'}/> 
                    : <CircularProgress /> 
                    }
            </div>
            <div className={s.pagination}>
                {pageQty &&(
                    <Pagination 
                        count={pageQty} 
                        page={page} 
                        onChange={(_, num) => setPage(num)}
                        size="small" 
                    />
                )}
            </div>

        </div>
    )
}

export default Products;
