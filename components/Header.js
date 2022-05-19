import Image from "next/image";
import Logo from "../public/static/images/Logo.png";
import Link from "next/link";

function Header() {
    return (
        <>
            <div className="p-3 main-container fixed-top">
                <div className="header__inner">
                    <div className="d-flex justify-content-around align-items-center">
                        <Image src={Logo} alt="logo-stock-image" width="28" height="20"/>
                        <ul className="header-menu text-white text-decoration-none d-flex">
                            <li className="me-3"><i className="fa fa-search me-3"/><span>
                                <Link href={'/search'}>
                                    Поиск
                                </Link>
                            </span></li>
                            <li className="me-3"><i className="fa-solid fa-heart me-3"/>
                                <span>
                                    <Link href={'/favorites'}>
                                    Избранное
                                 </Link>
                                </span>
                            </li>
                            <li className="me-3"><i className="fa-solid fa-clock-rotate-left me-3"/>
                                <span>
                                    <Link href={'/history-search'}>
                                    История поиска
                                 </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="header__inner-mobile">
                    <div className="d-flex justify-content-between align-items-center text-white">
                        <Image src={Logo} alt="logo-stock-image" width="29" height="29"/>
                        <div className="d-flex justify-content-between">
                            <i className="fa fa-search me-5 fa-2x"/>
                            <i className="fa-solid fa-heart me-5 fa-2x"/>
                            <i className="fa-solid fa-clock-rotate-left me-5 fa-2x"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
