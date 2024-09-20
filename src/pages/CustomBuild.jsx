import React, { useState, useContext, useEffect } from 'react'
import { Container, Form, Button, Dropdown } from 'react-bootstrap'
import { BuildsContext } from '../contexts/BuildsContext'
import { useNavigate } from 'react-router-dom'
import Motherboard from '../components/Motherboard'
import Processor from '../components/Processor'
import Memory from '../components/Memory'
import Graphic from '../components/Graphic'
import Casing from '../components/Casing'
import Storage from '../components/Storage'
import Cooler from '../components/Cooler'
import Powersupply from '../components/Powersupply'

export default function CustomBuild() {

    //Form Components
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [motherboard, setMotherboard] = useState("")
    const [processor, setProcessor] = useState("")
    const [memory, setMemory] = useState("")
    const [graphic, setGraphic] = useState("")
    const [casing, setCasing] = useState("")
    const [cooler, setCooler] = useState("")
    const [powersupply, setPowersupply] = useState("")
    const [storage, setStorage] = useState("")
    const [favorite, setFavorite] = useState(false)

    //Timer
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [timer, setTimer] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    //Context
    const setBuilds = useContext(BuildsContext).setBuilds
    const builds = useContext(BuildsContext).builds

    //Navigate
    const navigate = useNavigate();

    //Addbuild upon form submit
    function addBuild(event) {
        event.preventDefault();
        // setTimeElapsed(timer)
        setBuilds([...builds, {
            id: Date.now(),
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
            timeElapsed: timer
        }])
        clearInterval(timerInterval);
        setTimerInterval(null);
        setTimer(0);
        navigate('/viewbuild');
    }

    //Cancel build and clear states
    function cancelBuild() {
        setTitle("");
        setDescription("");
        setMotherboard("");
        setProcessor("");
        setMemory("");
        setGraphic("");
        setCasing("");
        setCooler("");
        setPowersupply("");
        setStorage("");
        navigate("/viewbuild");
    }

    //Timer starts upon page loaded
    useEffect(() => {
        if (timerInterval === null) {
            const intervalID = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
            setTimerInterval(intervalID);
        }
        return () => clearInterval(timerInterval)
    }, [timerInterval, setTimer, setTimeElapsed, setTimerInterval, timer]);

    return (
        <Container className="p-5">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="my-3">Build Your PC</h1>
                <span className="flex-right">Time: {timer} seconds</span>
            </div>
            <Form onSubmit={addBuild}>
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
