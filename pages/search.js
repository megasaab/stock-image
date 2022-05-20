import Gallery from "../components/Gallery";
import {useEffect, useState} from "react";
import {apiRequest} from "./api/api";

function Search() {

    const [topics, setTopic] = useState([]);


    useEffect(() => {
        apiRequest.getTopics().then((data) => setTopic(data));
    }, []);


    return (
        <>
            <div className="main-container mt-5">
                <div className="input__wrapper text-center p-5">
                    <input type="text" placeholder="Поиск"/>
                    <hr/>
                    <div className="search-type__wrapper" id="scroll-type">
                        {topics.map(type => {
                                return (
                                    <span className="me-3 search-type" key={type?.id}>
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
