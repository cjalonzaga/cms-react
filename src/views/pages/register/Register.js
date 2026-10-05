import React from 'react'
import { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {

  const [username , setUsername] = useState('')
  
  const [message , setMessage] = useState('')
  const [status , setStatus] = useState('')

  const [password , handlePassword] = useState('')
  const [confirmPassword , handleConfirmPassword] = useState('')
  const [isPasswordMatch , handlePasswordMatch] = useState(true)

  const handleNewPassword = (e) => {
      if(e !== ''){
          handlePassword(e)
      }
  }

  const handleNewConfirmPassword = (e) => {
      if(password !== ''){
        handleConfirmPassword(e)
      }
      console.log(password)
      handlePasswordMatch(password === e)
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CRow className="mb-3">
                    <CCol xs={6}>
                        <CFormInput placeholder="First Name" autoComplete="firstname" />
                    </CCol>
                    <CCol xs={6}>
                        <CFormInput placeholder="Last Name" autoComplete="firstname" />
                    </CCol>
                  </CRow>

                  <CRow className="mb-3">
                    <CCol xs={6}>
                      <CInputGroup>
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={6}>
                        <CInputGroup >
                          <CInputGroupText>@</CInputGroupText>
                          <CFormInput placeholder="Email" autoComplete="email" />
                        </CInputGroup>
                    </CCol>
                  </CRow>

                  <CRow className="mb-3">
                    <CCol xs={6}>
                      <CInputGroup >
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          onChange={(e) => handleNewPassword(e.target.value)}
                        />
                      </CInputGroup>
                    </CCol>
                      <CCol xs={6}>
                          <CInputGroup >
                            <CInputGroupText>
                              <CIcon icon={cilLockLocked} />
                            </CInputGroupText>
                            <CFormInput
                              type="password"
                              placeholder="Repeat password"
                              autoComplete="new-password"
                              invalid={!isPasswordMatch}
                              onChange={(e) => handleNewConfirmPassword(e.target.value)}
                            />
                    </CInputGroup>
                    </CCol>
                  </CRow>
                 
                  
                  
                  <div className="d-grid">
                    <CButton color="success" className='text-white'>Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
