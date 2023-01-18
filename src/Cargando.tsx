import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
export default function Cargando() {
  return (
    <Row style={{ fontSize: '300%' }} className='d-flex justify-content-center'>
      <Spinner style={{ width: '15rem', height: '15rem' }} variant='primary' animation='border' />
      <h4 style={{ position: 'absolute' }} className='m-0 font-weight-bold text-primary mr-auto align-self-center'>
        Cargando....
      </h4>
    </Row>
  )
}
