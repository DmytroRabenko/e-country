import {useEffect} from 'react'; 


const useToggle = (initialValue) => {

    const[value, setValue] = useToggle(initialValue);

    const toggle = () => {
        setValue(!value);
    }
    return [value, toggle];
}


const useClickOutside = (ref, callback) => {

    const handleClick = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            callback();
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

}


export {useToggle, useClickOutside};
