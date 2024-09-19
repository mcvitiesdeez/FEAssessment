import { useContext } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { BuildsContext } from '../contexts/BuildsContext'
import BuildCards from '../components/BuildCards'
import tapirPC from '../assets/tapirPC.jpeg'

export default function ViewBuild() {
    //Context
    const builds = useContext(BuildsContext).builds

    return (
        <Container className="p-5">
            <h1 className="my-3">Your builds</h1>
            <Row>
                <BuildGroup builds={builds} />
            </Row>
        </Container>
    )
}

function BuildGroup({ builds }) {
    console.log(typeof (builds))
    console.log(builds.length)
    if (builds.length !== 0) {
        return builds.map((build) => {
            return (
                <Col md={4} key={build.id}>
                    <BuildCards build={build} />
                </Col>
            )
        })
    } else {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <h2>You do not have any builds yet! Build one!</h2>
                <div>
                    <Image style={{ borderRadius: '21px', height: '400px', alignContent: 'center' }} src="src\assets\tapirPC.jpeg" alt="Building a PC" />
                </div>
            </div>
        )
    }

}