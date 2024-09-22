import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import orgPhoto from '../../assets/react.svg';
import './OrganizationPage.css';

const OrganizationPage = () => {
    const { alias } = useParams();
    const [proyects, setProyects] = useState([
        { name: 'Proyecto 1' },
        { name: 'Proyecto 2' },
        { name: 'Proyecto 3' },
    ]);

    const handleManageClick = (projectName) => {
        console.log(`Ver detalles de ${projectName}`);
    };

    return (
        <section className="main" id="orgpage">
            <div className='col-a'>
                <div className='profile-info'>
                    <div className='org-photo'>
                        <img src={orgPhoto} alt="Organización" />
                    </div>
                    <div className='org-info'>
                        <h1>Organización</h1>
                        <button className='code-button'>Código de Invitación</button>
                    </div>
                </div>
                <div className='org-proyects'>
                    <h2>Proyectos</h2>
                    {proyects.map((proy, index) => (
                        <div key={index} className="proy-item">
                            <span className="proyect">{proy.name}</span>
                            <button
                                className="admin-button"
                                onClick={() => handleManageClick(proy.name)}
                            >
                                Ver
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrganizationPage;
