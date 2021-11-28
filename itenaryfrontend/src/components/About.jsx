import { Container } from '@mui/material'
import React from 'react'

export default function About() {
    return (
        <div>
            <Container sx={{ textAlign: 'left' }}>
                <h3>Welcome to travel planner project. The project details are given below</h3>
                <h4>Project developed by Aravindh Muthuswamy</h4>
                <h5>Backend : Spring Boot</h5>
                <h5>Frontend : React</h5>
                <h5>Interface : Material UI (MUI)</h5>
            </Container>
        </div>
    )
}
