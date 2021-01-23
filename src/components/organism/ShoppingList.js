import React, { useState, useEffect } from 'react';
import { DATABASE_URL } from '../../index'
import DataTable from '../molecules/DataTable'
const ShoppingList = () => {

    const [shoppingList, setShoppingList] = useState([])

    useEffect(() => {
        fetch(`${DATABASE_URL}/Lista.json`)
            .then(res => res.json())
            .then(data => {
                setShoppingList(data)
            })
    }, [])


    return (

        <DataTable data={shoppingList} />

    );
}

export default ShoppingList;