import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Motherboard({ motherboard, setMotherboard }) {
    const handleSelect = (eventKey) => {
        setMotherboard(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={motherboard || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="MSI B650M Gaming Plus Wifi">MSI B650M Gaming Plus Wifi</Dropdown.Item>
                <Dropdown.Item eventKey="ASROCK A620M-HDV/M.2">ASROCK A620M-HDV/M.2</Dropdown.Item>
                <Dropdown.Item eventKey="Gigabyte A520M K V2">Gigabyte A520M K V2</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
