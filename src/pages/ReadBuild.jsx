import { useContext } from 'react'
import { Container, Button } from 'react-bootstrap'
import { BuildsContext } from '../contexts/BuildsContext'
import { useNavigate, useParams } from 'react-router-dom'

export default function ReadBuild() {
    //Context
    const setBuilds = useContext(BuildsContext).setBuilds
    const builds = useContext(BuildsContext).builds

    //Navigate
    const navigate = useNavigate();

    //Current ID
    const id = parseInt(useParams().id);
    const currentBuild = builds.filter((build) => build.id === id)[0];

    function backPage() {
        navigate("/viewbuild");
    }

    return (
        <Container className="p-5">
            <h1>{currentBuild.title}</h1>
            <p>{currentBuild.description}</p>
            <br />
            <br />
            <p><strong>Motherboard:</strong> {currentBuild.motherboard}</p>
            <p><strong>Processor:</strong> {currentBuild.processor}</p>
            <p><strong>RAM:</strong> {currentBuild.memory}</p>
            <p><strong>Graphic Card:</strong> {currentBuild.graphic}</p>
            <p><strong>Casing:</strong> {currentBuild.casing}</p>
            <p><strong>Cooler Fans:</strong> {currentBuild.cooler}</p>
            <p><strong>Power Supply:</strong> {currentBuild.powersupply}</p>
            <p><strong>Storage:</strong> {currentBuild.storage}</p>
            <p><strong>Time spent pondering on build:</strong> {currentBuild.timeElapsed} seconds</p>
            <Button variant="danger" onClick={backPage} className="ms-2">
                <i className="bi bi-arrow-return-left"></i>
            </Button>
        </Container>
    )
}
