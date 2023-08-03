import React from 'react'
import { Modal } from '@mantine/core'

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
    return (
        <Modal
            opened={opened}
            setOpened={setOpened}
            title="Select your date of visit."
            centered
        >
            <div>
                <span>This is Booking Modal</span>
            </div>
        </Modal>
    )
}

export default BookingModal