import { useContext, useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    function login() {
        const isCorrectUsername = username === "pcbuilder"
        const isCorrectPassword = password === "password"
        if (isCorrectPassword && isCorrectUsername) {
            authContext.setToken("123456789");
            navigate("/viewbuild")
        } else {
            navigate("/incorrectlogin")
        }
    }


    return (
        <Container>
            <h1 className="my-3">Login to your accounts </h1>
            <Form>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="email"
                        placeholder="name@example.com"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        We never share email with anyone else
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" onClick={login}>
                    Login
                </Button>
            </Form>
        </Container>
    )
}
