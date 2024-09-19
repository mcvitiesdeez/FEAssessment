import { useContext, useState } from 'react'
import { BuildsContext } from '../contexts/BuildsContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'
import Motherboard from '../components/Motherboard'
import Processor from '../components/Processor'
import Memory from '../components/Memory'
import Graphic from '../components/Graphic'
import Casing from '../components/Casing'
import Storage from '../components/Storage'
import Cooler from '../components/Cooler'
import Powersupply from '../components/Powersupply'

export default function EditBuild() {
    //Build Context
    const setBuilds = useContext(BuildsContext).setBuilds;
    const builds = useContext(BuildsContext).builds;

    //Navigate
    const navigate = useNavigate();

    //Current ID
    const id = parseInt(useParams().id);
    const currentBuild = builds.filter((build) => build.id === id)[0];

    //States
    const [title, setTitle] = useState(currentBuild.title)
    const [description, setDescription] = useState(currentBuild.description)
    const [motherboard, setMotherboard] = useState(currentBuild.motherboard)
    const [processor, setProcessor] = useState(currentBuild.processor)
    const [memory, setMemory] = useState(currentBuild.memory)
    const [graphic, setGraphic] = useState(currentBuild.graphic)
    const [casing, setCasing] = useState(currentBuild.casing)
    const [cooler, setCooler] = useState(currentBuild.cooler)
    const [powersupply, setPowersupply] = useState(currentBuild.powersupply)
    const [storage, setStorage] = useState(currentBuild.storage)
    const [favorite, setFavorite] = useState(false)
    const [timeElapsed, setTimeElapsed] = useState(currentBuild.timeElapsed)

    function updateBuild(event) {
        event.preventDefault();
        const updatedBuilds = builds.map((build) => {
            if (build.id === id) {
                return {
                    title,
                    description,
                    motherboard,
                    processor,
                    memory,
                    graphic,
                    casing,
                    cooler,
                    powersupply,
                    storage,
                    favorite,
                    timeElapsed
                }
            }
            return build;
        })
        setBuilds(updatedBuilds)
        navigate('/viewbuild')
    }

    function cancelBuild() {
        navigate("/viewbuild");
    }


    return (
        <Container className="p-5">
            <h1 className="my-3">Edit your build</h1>
            <Form onSubmit={updateBuild}>
                {/* Title */}
                <Form.Group className='mb-3' controlId='title'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        placeholder='Name your desired build'
                        required
                    />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        as="textarea"
                        rows={3}
                        placeholder={'Describe your machine'}
                        required
                    />
                </Form.Group>

                {/* Motherboard */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Motherboard: </span>
                    <Motherboard motherboard={motherboard} setMotherboard={setMotherboard} />
                </Form.Group>

                {/* Processor */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Processor: </span>
                    <Processor processor={processor} setProcessor={setProcessor} />
                </Form.Group>

                {/* Memory */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Memory: </span>
                    <Memory memory={memory} setMemory={setMemory} />
                </Form.Group>

                {/* Storage */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Storage: </span>
                    <Storage storage={storage} setStorage={setStorage} />
                </Form.Group>

                {/* Graphic */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Graphic Card: </span>
                    <Graphic graphic={graphic} setGraphic={setGraphic} />
                </Form.Group>

                {/* Casing */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Casing: </span>
                    <Casing casing={casing} setCasing={setCasing} />
                </Form.Group>

                {/* Cooler */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Cooler: </span>
                    <Cooler cooler={cooler} setCooler={setCooler} />
                </Form.Group>

                {/* Powersupply */}
                <Form.Group className="mb-3 d-flex align-items-center" controlId="description">
                    <span className='pe-3' style={{ fontSize: "20px" }}>Power Supply: </span>
                    <Powersupply powersupply={powersupply} setPowersupply={setPowersupply} />
                </Form.Group>

                {/* Favorite */}
                <Form.Check
                    type="checkbox"
                    id="completed"
                    label="❤️Favorite"
                    checked={favorite}
                    onChange={(e) => setFavorite(e.target.checked)}
                    className="mb-3"
                />

                <Button className="me-2" variant="success" type="submit">
                    Submit
                </Button>
                <Button variant="danger" onClick={cancelBuild}>
                    Cancel
                </Button>
            </Form>
        </Container>
    )
}
