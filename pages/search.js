import {types} from "./api/mock";

function Search() {
    const typeList = types.trim().split(' ');
    typeList.filter(Boolean);

    const onWheel = e => {
        e.preventDefault();
        const container = document.getElementById("scroll-type");
        const containerScrollPosition = document.getElementById("scroll-type").scrollLeft;
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behaviour: "smooth"
        });
    };

    return (
        <div className="main-container">
            <div className="input__wrapper text-center p-5">
                <input type="text" placeholder="Поиск"/>
                <hr/>
                <div className="search-type__wrapper" id="scroll-type" onWheel={onWheel}>
                    {typeList.map(type =>
                            <span className="me-1 search-type" key={type}>
                        {type}
                    </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search;
