import Gallery from "../components/Gallery";
import {useEffect, useState} from "react";
import {apiRequest} from "./api/api";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../action";

function Search() {

    const [topics, setTopic] = useState([]);
    const [searchQuery, setQuery] = useState('');
    const dispatch = useDispatch()

    const onChanged = (value) => {
        setQuery(value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            dispatch(setSearch(searchQuery));
        }
    }

    useEffect(() => {
        apiRequest.getTopics().then((data) => setTopic(data));
    }, []);


    return (
        <>
            <div className="main-container mt-5">
                <div className="input__wrapper text-center p-5">
                    <input type="text" placeholder="Поиск" onChange={e => onChanged(e.target.value)} onKeyPress={handleKeyPress}/>
                    <hr/>
                    <div className="search-type__wrapper" id="scroll-type">
                        {topics.map(type => {
                                return (
                                    <span className="me-3 search-type" key={type?.id}
                                          onClick={() => apiRequest.getTopicsPhoto(type.id)}>
                                     {type?.title}
                                </span>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
            <Gallery/>
        </>
    )
}

export default Search;
