import {useEffect} from "react";
import {useRouter} from "next/router";

function notFound() {

    const router = useRouter();

    useEffect(() => {
        router.push('/')
    },[])

    return (
        <div>
            not found
        </div>
    )
}

export default notFound;
