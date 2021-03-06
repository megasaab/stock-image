import Head from 'next/head'
import {useRouter} from "next/router";
import {useEffect} from "react";


function Home() {

    const router = useRouter();

    useEffect(() => {
        router.push('/search');
    },[])

    return (
        <div>
            <Head>
                <title>ImageStock</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <footer>
            </footer>
        </div>
    )
}

export default Home;
