import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Casing({ casing, setCasing }) {
    const handleSelect = (eventKey) => {
        setCasing(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={casing || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Antec C5 Black (7x ARGB Fans)">Antec C5 Black (7x ARGB Fans)</Dropdown.Item>
                <Dropdown.Item eventKey="Antec NX292">Antec NX292</Dropdown.Item>
                <Dropdown.Item eventKey="Antec AX20 Elite (4x ARGB Fans)">Antec AX20 Elite (4x ARGB Fans)</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
