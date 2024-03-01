import React, { useEffect, useReducer } from "react";
import CardComponent from "../components/CardComponent";
import { Col, Row, Container, Button } from "react-bootstrap/";

const ACTIONS = {
    CALL_API: "call-apo",
    SUCCESS: "success",
    ERROR: "error"
}

const sekolahDetailsDispatcher = (state, action) => {
    switch (action.type) {
        case ACTIONS.CALL_API: {
            return {
                ...state,
                loading: true
            }
        }
        case ACTIONS.SUCCESS: {
            return {
                ...state,
                loading: false,
                sekolahDetails: action.data
            }
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                loading: true,
                error: action.error
            }
        }
    }
}

const initialState = {
    sekolahDetails: [],
    loading: false,
    error: null
}

export default function SekolahPages() {
    const [state, dispatch] = useReducer(sekolahDetailsDispatcher, initialState)
    const { sekolahDetails, loading, error } = state

    useEffect(() => {
        dispatch({ type: ACTIONS.CALL_API })
        const getSekolah = async () => {
            let response = await fetch("http://localhost:8000/sekolah")
            let hotels = await response.json()
            if (response.status === 200) {
                dispatch({ type: ACTIONS.SUCCESS, data: hotels })
                console.log(hotels);
                return;
            } else {
                dispatch({ type: ACTIONS.ERROR, data: response.error })
            }
            console.log(response.body);
        }
        getSekolah()
    }, [])

    return (
        <>
            <Container fluid style={{marginTop: "20px", marginBottom: "20px"}}>
                <Button href="/addSekolah" variant="success">+</Button>
                <Row>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        sekolahDetails.map((sekolah) => {
                            return (
                                <Col key={sekolah.id} >
                                    <CardComponent namaSekolah={sekolah.sekolah} aboutSekolah={sekolah.about}  />
                                </Col>
                            )
                        })
                    )}

                </Row>
            </Container>
        </>
    )
}