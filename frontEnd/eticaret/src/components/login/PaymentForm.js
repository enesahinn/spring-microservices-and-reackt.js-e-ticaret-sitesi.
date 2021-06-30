import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'e', text: 'Erkek', value: 'erkek' },
  { key: 'k', text: 'Kadın', value: 'kadın' },
]

const PaymentForm = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Adınız'
        placeholder='Adınız'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Soyadınız'
        placeholder='Soyadınız'
      />
      <Form.Field
        control={Select}
        options={genderOptions}
        label={{ children: 'Cinsiyet', htmlFor: 'form-select-control-gender' }}
        placeholder='Cinsiyet'
        search
        searchInput={{ id: 'form-select-control-gender' }}
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Adresiniz'
      placeholder='Adresiniz'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='abc@gmail.com'
      
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Alışverişi Tamamla'
    />
  </Form>
)

export default PaymentForm