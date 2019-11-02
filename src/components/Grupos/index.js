import React from 'react'
import './grupos.css'

import CardGrupo from '../CardGrupo'
import CardGrupoAdicionar from '../CardGrupoAdicionar'

const Grupos = () => (
    <div className="grupos">
        <div className="container">
            <CardGrupoAdicionar />
            <CardGrupo />
            <CardGrupo />
            <CardGrupo />
        </div>
    </div>
);

export default Grupos;