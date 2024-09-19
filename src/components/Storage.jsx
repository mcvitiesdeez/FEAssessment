import { Dropdown, DropdownButton } from 'react-bootstrap'

export default function Storage({ storage, setStorage }) {
    const handleSelect = (eventKey) => {
        setStorage(eventKey)
    }

    return (
        <>
            <DropdownButton variant='secondary' title={storage || "Select an option"} onSelect={handleSelect}>
                <Dropdown.Item eventKey="Lexar NQ790 500GB NVME SSD">Lexar NQ790 500GB NVME SSD</Dropdown.Item>
                <Dropdown.Item eventKey="Lexar NM620 256GB SSD">Lexar NM620 256GB SSD</Dropdown.Item>
                <Dropdown.Item eventKey="Kingston NV3 500GB">Kingston NV3 500GB</Dropdown.Item>
            </DropdownButton>
        </>
    )
}
