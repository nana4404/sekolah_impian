import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function CardComponent({ namaSekolah, aboutSekolah }) {
    function formatAbout(about) {
        return about.substring(0, 100) + "..."
    }

    return (
        <>
            <Card style={{ width: '18rem', height: "25rem", marginTop: "20px", marginBottom: "20px" }}>
                <Card.Img variant="top" src={"https://i.imgur.com/xtUdxna.jpeg"} />
                <Card.Body>
                    <Card.Title>{namaSekolah}</Card.Title>
                    <Card.Text>
                        {formatAbout(aboutSekolah)}
                    </Card.Text>
                    <Button variant="primary" href="/details" style={{marginRight: "20px"}}>Details</Button>
                    <Button variant="danger" >Delete</Button>
                </Card.Body>

            </Card>
            {console.log("this is the card")}
        </>
    )
}