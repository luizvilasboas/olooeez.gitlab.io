import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IoMdClose } from 'react-icons/io';
import ReCAPTCHA from 'react-google-recaptcha';
import Typography from '../Typography';
import Button from '../Button';
import { Element } from 'react-scroll';

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_KEY);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    message: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setFormData({
        email: '',
        title: '',
        message: '',
      });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Element
      className='grid md:grid-cols-2 mt-10 md:mt-20 gap-10 bg-zinc-700 text-textWhite p-10'
      name='contact'
    >
      <div className='flex flex-col justify-center items-center gap-10'>
        <Typography variant='h1'>Contato</Typography>
        <Typography variant='p' className='w-auto md:w-2/3 mx-5 md:mx-10'>
          Se desejar entrar em contato comigo por meio de e-mail, basta
          preencher o formulário com seu nome, o título do e-mail e o corpo da
          mensagem. Assim, receberei seu e-mail e entrarei em contato assim que
          possível.
        </Typography>
      </div>
      <form className='max-w-lg' onSubmit={handleSubmit}>
        {showSuccessMessage && (
          <div
            class='bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded relative mb-5'
            role='alert'
          >
            <strong class='font-bold'>Mensagem enviada com sucesso!</strong>
            <Typography variant='p' class='absolute top-0 bottom-0 right-0 px-4 py-3'>
              <IoMdClose className='fill-current h-6 w-6 text-emerald-500 hover:bg-emerald-500 hover:text-emerald-300 transition cursor-pointer rounded' onClick={() => setShowSuccessMessage(false)} />
            </Typography>
          </div>
        )}
        <div className='mb-4'>
          <label className='block text-lg font-light mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='w-full border p-2 rounded text-textBlack'
            id='email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-light mb-2' htmlFor='title'>
            Título
          </label>
          <input
            className='w-full border p-2 rounded text-textBlack'
            id='title'
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
          <ValidationError prefix='Title' field='title' errors={state.errors} />
        </div>
        <div className='mb-4'>
          <label className='block text-lg font-light mb-2' htmlFor='message'>
            Mensagem
          </label>
          <textarea
            className='w-full border p-2 rounded text-textBlack h-40'
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <ReCAPTCHA className='mb-4' sitekey={process.env.REACT_APP_RECAPTCHA_KEY} />
        <Button
          type='submit'
          disabled={state.submitting}
        >
          Enviar
        </Button>
      </form>
    </Element>
  );
};

export default ContactForm;
