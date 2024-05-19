import {Button, Navbar} from "flowbite-react";
import {IoDocumentTextOutline} from "react-icons/io5";
import {useNavigate} from "@remix-run/react";

export default function NavbarUI({auth}:{auth: boolean}) {
    const navigate = useNavigate();

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <IoDocumentTextOutline size={40} color={"white"}/>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LogMe</span>
            </Navbar.Brand>
            {auth ?
                (<div className="flex md:order-2">
                    <Button onClick={() => navigate('/logout')}>Cerrar Sessión</Button>
                    <Navbar.Toggle/></div>)
                :

                (<div className="flex md:order-2">
                    <Button onClick={() => navigate('/login')}>Iniciar Sesión</Button>
                    <Navbar.Toggle/></div>)
            }
            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/Dashboard">Dashboard</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}