import React from 'react';
import RegularItemsList from './RegularItemsList';

const RegularItemsListContainer = ({useItemsData}) => {
    const {tasksList} = useItemsData();
    return <RegularItemsList items={tasksList}/>;
};

export default RegularItemsListContainer;
