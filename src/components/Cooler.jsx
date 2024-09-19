import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Cooler({ cooler, setCooler }) {
    const handleSelect = (eventKey) => {
        setCooler(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={cooler || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Coolermaster ML240L Core ARGB">Coolermaster ML240L Core ARGB</Dropdown.Item>
                <Dropdown.Item eventKey="PCCooler RT400 ARGB">PCCooler RT400 ARGB</Dropdown.Item>
                <Dropdown.Item eventKey="AMD Stock Cooler">AMD Stock Cooler</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
