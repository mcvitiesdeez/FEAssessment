import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Powersupply({ powersupply, setPowersupply }) {
    const handleSelect = (eventKey) => {
        setPowersupply(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={powersupply || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Corsair RM850E ATX3.0 (80+ Gold)">Corsair RM850E ATX3.0 (80+ Gold)</Dropdown.Item>
                <Dropdown.Item eventKey="Antec CSK550 (80+ Bronze)">Antec CSK550 (80+ Bronze)</Dropdown.Item>
                <Dropdown.Item eventKey="Super Flower Zillion Bronze 650W">Super Flower Zillion Bronze 650W</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
