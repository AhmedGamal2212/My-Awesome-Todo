import React from 'react';
import RegularItemsList from './RegularItemsList';

const RegularItemsListContainer = ({ useItemsData }) => {
    const items = useItemsData();
    console.log(items);
    return <RegularItemsList items={items} />
};

export default RegularItemsListContainer;
