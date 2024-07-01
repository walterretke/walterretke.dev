import React from 'react';
import DefaultLayout from "@/layouts/DefaultLayout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
    return (
        <div>
            <DefaultLayout>
                <ContactForm />
            </DefaultLayout>
        </div>
    );
}

export default Contact;
