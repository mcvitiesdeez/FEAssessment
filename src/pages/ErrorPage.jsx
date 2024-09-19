import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import errorImage from '../assets/Error404.jpeg'

export default function ErrorPage() {
    return (
        <Container className="p-5">
            <h1 className="my-3">Error EMPAT-KOSONG-EMPAT: TAK DAPAT CARI PAGE KO WOIII!</h1>
            <h3>Okaylah, cakap baik2. Error 404: Page not found.</h3>
            <div className='d-flex justify-content-center mt-5'>
                <Image style={{ borderRadius: '21px', height: '500px', alignContent: 'center' }} src={errorImage} alt='Error404.jpeg' />
            </div>
        </Container>
    )
}
