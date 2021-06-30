import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        Hesabınıza Giriş Yapın
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail adresiniz' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Şifreniz'
            type='password'
          />
          <Button color='blue' fluid size='large'>
            Giriş 
          </Button>
        </Segment>
      </Form>
      <Message>
        Üye değil misin?  <a href='#'>Kayıt Ol</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm