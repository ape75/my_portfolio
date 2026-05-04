import { useRef } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Textarea, Button, Paper, Stack, Title } from '@mantine/core';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { LuMessageCircleMore } from "react-icons/lu";
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';


function ContactForm() {
  const formRef = useRef();
  const recaptchaRef = useRef();  // ← Add ref for reCAPTCHA

  const form = useForm({
    initialValues: { name: '', email: '', message: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length < 5 ? 'Message must be longer' : null),
    },
  });

  const sendEmail = async (values) => {
    try {
      // 1. Show "Sending..." notification
      notifications.show({
        id: 'send-email',
        loading: true,
        title: 'Sending message',
        message: 'Please wait, your message is on its way...',
        autoClose: false,
        withCloseButton: false,
        position:"top-right"
      });

      // 2. Get the reCAPTCHA token
      const captchaToken = window.grecaptcha.getResponse();
      if (!captchaToken) {
        notifications.update({
          id: 'send-email',
          color: 'red',
          title: 'Verification Required',
          message: 'Please complete the reCAPTCHA verification.',
          icon: <IconX size={18} />,
          loading: false,
          autoClose: 5000,
          position:"top-right",
          withCloseButton:"yes"
        });
        return;
      }

      // 3. Prepare template parameters
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
        'g-recaptcha-response': captchaToken,
      };

      // 4. Send email using EmailJS
      const result = await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        // --- Success! ---
        notifications.update({
          id: 'send-email',
          color: 'teal',
          title: 'Message sent!',
          message: 'Thanks for reaching out! I will get back to you soon.',
          icon: <IconCheck size={18} />,
          loading: false,
          autoClose: 6000,
          position:"top-right",
          withCloseButton:"yes"
        });
        form.reset();
        recaptchaRef.current.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      // --- Error! ---
      notifications.update({
        id: 'send-email',
        color: 'red',
        title: 'Something went wrong',
        message: 'Failed to send message. Please try again or email me directly.',
        icon: <IconX size={18} />,
        loading: false,
        autoClose: 7000,
      });
      recaptchaRef.current.reset();
    }
  };

  return (
    <Paper className='contact-form-container' p="xl" radius="md" bg="var(--bg-tertiary)" withBorder>
      <div style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center', marginBottom:'10px'}}>
        <LuMessageCircleMore size={36} style={{marginRight:'5px'}} />
        <Title order={2} ta="center">Get in Touch</Title>
      </div>     
      <form ref={formRef} onSubmit={form.onSubmit(sendEmail)}>
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            inputSize='50'
            {...form.getInputProps('name')}
          />
          
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            {...form.getInputProps('email')}
          />
          
          <Textarea
            label="Message"
            placeholder="Your message..."
            minRows={5}
            required
            {...form.getInputProps('message')}
          />
          
          {/* reCAPTCHA component */}
          <div className="recaptcha-container" style={{ display: 'flex', justifyContent: 'left', margin: '1rem 0'}}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              theme="dark"
            />
          </div>
          
          <Button 
            title='Send message'
            type="submit" 
            variant="gradient"
            gradient={{ from: '#3b82f6', to: '#8b5cf6', deg: 135 }}
            fullWidth
          >
            Send Message
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default ContactForm;