import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { BuildsContext } from '../contexts/BuildsContext'
import './BuildCards.css'

export default function BuildCards({ build }) {
    const favorite = build.favorite
    const border = favorite ? 'danger' : 'secondary';
    const favoriteText = favorite ? "It's favorite! So BUYY!" : 'Meehhh~ Get a better one.'
    const favoriteBg = favorite ? 'bg-favorite' : 'bg-unfavorite'

    //Context
    const setBuilds = useContext(BuildsContext).setBuilds

    //Delete build
    const deleteBuild = () => {
        setBuilds((prevBuilds) =>
            prevBuilds.filter((prevBuild) => prevBuild.id !== build.id)
        );
    };

    return (
        <>
            <Card border={border} className='my-3'>
                <Card.Header className={favoriteBg}>{favoriteText}</Card.Header>
                <Card.Body>
                    <Card.Title>{build.title}</Card.Title>
                    <Card.Text>
                        {build.description}
                        <p>Time spent: {build.timeElapsed} seconds</p>
                    </Card.Text>
                    <Button variant="secondary" href={`/readbuild/${build.id}`} className="ms-2">
                        <i className="bi bi-search"></i>
                    </Button>
                    <Button variant="warning" href={`/editbuild/${build.id}`} className="ms-2">
                        <i className="bi bi-pencil"></i>
                    </Button>
                    <Button variant="danger" onClick={deleteBuild} className="ms-2">
                        <i className="bi bi-trash3"></i>
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}
