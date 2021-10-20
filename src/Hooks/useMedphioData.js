import { useState } from 'react';
import { useEffect } from 'react';


const useMedphioData = () => {

    const [datas, setDatas] = useState([]);

    useEffect( () => {
        fetch('./medphioData.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, []);
    return [datas];
};

export default useMedphioData;

