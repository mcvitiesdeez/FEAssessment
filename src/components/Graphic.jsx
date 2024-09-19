import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Graphic({ graphic, setGraphic }) {
    const handleSelect = (eventKey) => {
        setGraphic(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={graphic || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Gigabyte RTX4080S 16GB">Gigabyte RTX4080S 16GB</Dropdown.Item>
                <Dropdown.Item eventKey="Gigabyte RTX4060Ti 8GB DDR6">Gigabyte RTX4060Ti 8GB DDR6</Dropdown.Item>
                <Dropdown.Item eventKey="MSI RTX3050 6GB">MSI RTX3050 6GB</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
