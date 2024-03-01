import React from "react";
import NavbarComponent from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";

export default function HomePage() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    
                    <br/>
                    <img src="https://i.imgur.com/xtUdxna.jpeg" alt="" style={{borderRadius:"10px"}}/>
                    <br/>
                    <br/>

                    </Col>
                    <Col>
                        <h2 style={{textAlign: "center"}}>Sekolah Impian!</h2>
                        <p style={{textAlign: "justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quidem reprehenderit reiciendis consectetur ducimus autem nulla, delectus voluptatibus voluptatem, magni aliquam error blanditiis similique modi! Magni labore consequuntur dolor voluptatum!
                            Est perferendis excepturi totam neque, facere, fuga voluptatum commodi tempora reiciendis libero nostrum consequatur et perspiciatis delectus maiores quis ducimus sapiente aliquid blanditiis, atque quae vero fugit assumenda minus. Itaque.
                            Odio, veritatis. Atque cupiditate commodi vitae similique animi iste necessitatibus, illum, nisi amet deserunt quisquam assumenda incidunt repudiandae dolorem quod facere neque! Itaque sequi consectetur consequuntur magni necessitatibus dignissimos laborum.
                            Ex deserunt voluptatibus quam autem laborum quas sunt iusto alias nostrum ipsum perferendis cumque accusamus sit aut, reiciendis animi provident velit explicabo nisi dicta aspernatur officiis vel at voluptatum! Exercitationem.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}