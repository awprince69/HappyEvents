import React from 'react';
import EventInfo from '../EventInfo/EventInfo';
import Friend from '../../../images/icon/support.png'
import Venue from '../../../images/icon/place.png'
import Scenario from '../../../images/icon/champagne-glass.png'
import Time from '../../../images/icon/confetti.png'
import './BusinessInfo.css'

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Friendly Team',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas!',
            icon: Friend,
            button: 'ABOUT US'
        },
        {
            title: 'Perfect Venues',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas!',
            icon: Venue,
            button: 'OUR VENUES'
        },
        {
            title: 'Unique Scenarios',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas!',
            icon: Scenario,
            button: 'OUR PARTIES'
        },
        {
            title: 'Unforgettable Time',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas!',
            icon: Time,
            button: 'CLIENTS REVIEWS'
        },
    ]
    return (
        <section className=" container  d-flex justify-content-center mt-5 pt-5 mb-5 ">
            <div className=" row w-100 ">
                {
                    infoData.map(info => <EventInfo info={info} key={info.title}></EventInfo>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;