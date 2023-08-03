import React from 'react'
import { Modal } from '@mantine/core'

const AddPropertyModal = ({ opened, setOpened }) => {
    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            closeOnClickOutside
            size={"90rem"}
        >
            Property Modal
        </Modal>
    )
}

export default AddPropertyModal