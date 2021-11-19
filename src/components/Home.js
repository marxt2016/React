import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const name = useSelector(state => state.profile.name);
    return <h2 className="App">Homepage {name}</h2>
}