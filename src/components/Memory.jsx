import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Memory({ memory, setMemory }) {
    const handleSelect = (eventKey) => {
        setMemory(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={memory || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="GSKILL Ripjaws S5 16GB DDR5 5200MHz">GSKILL Ripjaws S5 16GB DDR5 5200MHz</Dropdown.Item>
                <Dropdown.Item eventKey="Kingston 8GB DDR5 4800MHz">Kingston 8GB DDR5 4800MHz</Dropdown.Item>
                <Dropdown.Item eventKey="GSKILL Aegis 8GB DDR4 3200MHz">GSKILL Aegis 8GB DDR4 3200MHz</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
