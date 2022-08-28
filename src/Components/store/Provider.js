import Context from './Context';
import { useState } from 'react'

function Provider({ children }) {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [item, setItem] = useState([]);

    const handleSubmit = () => {
        setCount(count + 1);
    }

    const handleSubmitCart = () => {
        setCount1(count1 + 1);
    }

    const getItem = (index, inforProduct) => {
        setItem(prevState => [...prevState, inforProduct[index]]);
    }

    const valueContext = {
        count,
        count1,
        item,
        handleSubmit,
        handleSubmitCart,
        getItem
    }
    return (
        <Context.Provider value={valueContext}>
            {children}
        </Context.Provider>
    )
}

export default Provider