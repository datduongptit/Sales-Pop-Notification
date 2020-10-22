import React, {useState, useCallback, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'; 
import logo from '../../../images/logo192.png';
import {connect} from 'react-redux'

const Notification = (effect) => {
    const [stateEffect, setStateEffect] = useState(true);
    const handleChange = useCallback(() => setStateEffect(!stateEffect), [stateEffect]);
    console.log(effect);
    return (
        <>
            {stateEffect === true || effect.effect && !stateEffect && effect.hide ? (              
                <div id='show-demo' className= {`animate__animated animate__${effect.hide} animate__${effect.effect}`}>
                        <Container style={{padding: 0}}>
                            <Row xs='2'>
                                <Col md='4' xs='4' style={{paddingRight: 0, marginRight: 0}}>
                                <img className='img_demo' alt='nothing' src={logo} />  
                                </Col>                          
                                <Col md='8' xs='8' style={{paddingLeft: 0}} >
                                    <a onClick={handleChange} className='hide_demo'>
                                        <i className="fa fa-times"></i>
                                    </a>
                                    <h5>Omega in Ha Noi, Viet Nam purchased</h5>
                                    <h2>Lorem ipsum dolor</h2>
                                    <p>4 hours ago</p>
                                </Col>                           
                            </Row>
                        </Container>
                </div>
            ) : ''}
        </>
    )
}

export default connect()(Notification)
