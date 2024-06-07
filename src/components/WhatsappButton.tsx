import { IoLogoWhatsapp } from "react-icons/io";

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.link/adiwba"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600"
        >
            <IoLogoWhatsapp size={24} />
        </a>
    );
}