import React from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import { FaShower } from 'react-icons/fa'
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai'
import { useAuth0 } from '@auth0/auth0-react'

import Map from '../../components/Map/Map'
import { getProperty } from '../../utils/api'
import BookingModal from '../../components/BookingModal/BookingModal'

import './Property.css'

const Property = () => {

    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    const { data, isLoading, isError } = useQuery(["residency", id], () => getProperty(id))

    const [ modalOpened, setModalOpened ] = useState(false)
    const { validateLogin, user } = useAuth0()

    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details.</span>
                </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
                <div className="like">
                    <AiFillHeart size={24} color='white' />
                </div>
                <img src={data?.image} alt="Home Image" />
                <div className="flexCenter property-details">
                    <div className="flexColStart left">
                        <div className="flexStart head">
                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText' style={{fontSize: '1.5rem'}}>$ {data?.price}</span>
                        </div>
                        <div className="flexStart facilities">
                            <div className="flexStart facility">
                                <FaShower size={20} color='1F3E72' />
                                <span>{data?.facilities?.bathrooms} Bathrooms</span>
                            </div>
                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color='1F3E72' />
                                <span>{data?.facilities?.parkings} Parkings</span>
                            </div>
                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color='1F3E72' />
                                <span>{data?.facilities?.bedrooms} Bedrooms</span>
                            </div>
                        </div>
                        <span className="secondaryText" style={{ textAlign: "justify" }}>{data?.description}</span>
                        <div className="flexStart" style={{ gap: "1rem" }}>
                            <MdLocationPin size={25} color='1F3E72' />
                            <span className="secondaryText">{data?.address}, {data?.city}, {data?.country}
                            </span>
                        </div>
                        <button
                            className="button"
                            onClick={() => {
                                validateLogin() && setModalOpened(true)
                            }}
                        >
                            Book your visit
                        </button>
                        <BookingModal
                            opened={modalOpened}
                            setOpened={setModalOpened}
                            propertyId={id}
                            email={user?.email}
                        />
                    </div>
                    <div className="map">
                        <Map address={data?.address} city={data?.city} country={data?.country}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property