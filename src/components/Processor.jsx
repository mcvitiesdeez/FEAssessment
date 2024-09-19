import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Processor({ processor, setProcessor }) {
    const handleSelect = (eventKey) => {
        setProcessor(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={processor || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="AMD Ryzen 7800X3D">AMD Ryzen 7800X3D</Dropdown.Item>
                <Dropdown.Item eventKey="AMD Ryzen 5 7500F">AMD Ryzen 5 7500F</Dropdown.Item>
                <Dropdown.Item eventKey="AMD Ryzen 6 5500">AMD Ryzen 6 5500</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
