import React from 'react';
import ContactLayout from "@/layouts/ContactLayout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
    return (
        <div>
            <ContactLayout>
                <ContactForm />
            </ContactLayout>
        </div>
    );
}

export default Contact;
