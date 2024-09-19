import { Button, Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import stopLogin from '../assets/clickMe.jpeg'

export default function WrongLogin() {
    const navigate = useNavigate();

    function goBack() {
        navigate('/login')
    }
    return (
        <Container className="p-5 d-flex flex-column align-items-center">
            <Button onClick={goBack}>
                <img src={stopLogin} style={{ borderRadius: '21px', height: '500px', alignContent: 'center' }} alt='stop.jpeg' />
            </Button>
            <div className="my-2">
                <span className='pe-2'>Pssstt! Hover over this button</span>
                <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip">Username: pcbuilder Password: password</Tooltip>}>
                    <Button variant='primary'><i className="bi bi-info-square"></i></Button>
                </OverlayTrigger>
            </div>
        </Container>
    )
}
