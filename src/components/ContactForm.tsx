import React, { FormEvent } from 'react'
// import useForm from '../hooks/useForm'
// import { gql, useMutation } from '@apollo/client';

// // Define mutation
// const CREATE_MESSAGE = gql`
// mutation {
//     createMessage(
//       data: {
//         name: "John"
//         email: "john@doe.com"
//         phone: "465478345"
//         message: "Jag heter John"
//         topic: "kurser"
//       }
//     ) {
//       data {
//         id
//         attributes {
//           name
//           email
//           phone
//           message
//           topic
          
//   }
//       }
//     }
//   }
// `;

export default function ContactForm() {

    // const { data, loading, error} = useMutation(CREATE_MESSAGE);


    // const [createMessageFunction, { data, loading, error }] = useMutation(CREATE_MESSAGE);

    // if (loading) return 'Submitting...';

    // if (error) return `Submission error! ${error.message}`;

    // console.log(data);

    // const {handleChange, values, errors } = useForm();

    return (
        <form>
        {/* //     <h4>Kontakta Emma</h4>
        //     <label htmlFor="name">Namn</label>
        //     <input type="text" name="name" placeholder='Namn' onChange={handleChange}/>

        //     <label htmlFor="phone">Telefon</label>
        //     <input type="tel" name="phone" placeholder='Telefon' onChange={handleChange}/>

        //     <label htmlFor="email">Email adress</label>
        //     <input type="email" name="phone" placeholder='Email' onChange={handleChange}/>

        //     <label htmlFor="message"></label>
        //     <textarea name="message" placeholder='Meddelande...'/>

        //     <button type='submit'>Skicka</button> */}
        </form>
    )
}
