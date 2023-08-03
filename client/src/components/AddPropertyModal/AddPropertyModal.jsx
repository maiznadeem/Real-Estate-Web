import React, { useState } from 'react'
import { Container, Modal, Stepper, Group, Button } from '@mantine/core'
import { useAuth0 } from '@auth0/auth0-react'

import AddLocation from '../AddLocation/AddLocation';

const AddPropertyModal = ({ opened, setOpened }) => {

    
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const { user } = useAuth0()

    const [propertyDetails, setPropertyDetails] = useState({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
            bedrooms: 0,
            parkings: 0,
            bathrooms: 0,
        },
        userEmail: user?.email,
    })

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            size={"90rem"}
        >
            <Container h={"40rem"} w={"100%"} >

                <Stepper 
                    active={active}
                    onStepClick={setActive}
                    breakpoint="sm"
                    allowNextStepsSelect={false}
                >
                    <Stepper.Step label="Location" description="Address of Your Property">
                        <AddLocation
                            nextStep={nextStep}
                            propertyDetails={propertyDetails}
                            setPropertyDetails={setPropertyDetails}
                        />
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                        Step 2 content: Verify email
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                        Step 3 content: Get full access
                    </Stepper.Step>
                    <Stepper.Completed>
                        Completed, click back button to get to previous step
                    </Stepper.Completed>
                </Stepper>

                <Group position="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next step</Button>
                </Group>

            </Container>
        </Modal>
    )
}

export default AddPropertyModal