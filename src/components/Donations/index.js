import React from 'react'
import './donations.css'

import ListarDonations from '../ListarDonations'
import CardDonationAdicionar from '../CardDonationAdicionar'

const Donations = () => (
    <div className="donations">
        <div className="container">
            <CardDonationAdicionar />
            <ListarDonations />
        </div>
    </div>
);

export default Donations;