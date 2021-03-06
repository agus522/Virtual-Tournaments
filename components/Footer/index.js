import React from 'react';
import { ContenedorFooter, Logo } from './styled';

{/* importo el div que creo en styled*/ }

{/* Este es el compoennte donde vos a poner el codigo delheader*/ }
import { Titulo } from 'components';

{/* la clase tiene tiene que llamarse igual a la carpeta que conitene todo, osea, header*/ }
export default function Footer(formato) {
    return (
        <ContenedorFooter tipo={formato}>
            <Titulo level={3}>¡SEGUINOS EN LAS REDES!</Titulo>
            <nav>
                <ul>
                    <li>
                        <a href="#"><img src="../assets/twitch.png" /></a>
                        <a href="#"><img src="../assets/twitter.png" /></a>
                        <a href="#"><img src="../assets/youtube.png" /></a>
                        <a href="#"><img src="../assets/instagram.png" /></a>
                    </li>
                </ul>
            </nav>

            <p> ©2020 VIRTUAL TOURNAMENTS S.A. TODOS LOS DERECHOS RESERVADOS</p>
            <p> Todas las marcas registradas referenciadas son propiedad de sus respectivos dueños</p>
            <Logo>
                <img src="../assets/logo_gris.png" />
            </Logo>

        </ContenedorFooter>

    )
}
