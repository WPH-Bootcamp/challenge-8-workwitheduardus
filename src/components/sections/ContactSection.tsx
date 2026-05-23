import Modal from "../ui/Modal";
import type { ModalProps } from "../../types";
import { useState } from "react";

const serviceOptions = [
    "Web Development",
    "Cloud Solutions",
    "Mobile App Development",
    "Software Development",
    "UI/UX Design",
    "Other",
];

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors placeholder-gray-400";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [selectedService, setSelectedService] = useState<string[]>([]);
    const [modal, setModal] = useState<{ isOpen: boolean;
        type: ModalProps["type"]}>({
        isOpen: false,
        type: "success",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const toggleService = (service: string) => {
        setSelectedService((prev) =>
            prev.includes(service)
                ? prev.filter((s) => s !== service)
                : [...prev, service]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message.trim()) {
            setModal({ isOpen: true, type: "error" });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setModal({ isOpen: true, type: "error" });
            return;
        }

        setModal({ isOpen: true, type: "success" });
        setFormData({ name: "", email: "", message: "" });
        setSelectedService([]);
    };

    const handleCloseModal = () => {
        setModal({ ...modal, isOpen: false });
        if (modal.type === "success") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            <section id="contact" className="bg-white">
                <div className="max-w-[1160px] mx-auto px-4 sm:px-5 py-16 lg:py-20">
                    {/* header */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-25">Ready to Start? Let's Talk.
                        </h2>
                        <p className="mt-3 text-base text-gray-400">
                            Tell us what you need, and we’ll get back to you soon.
                        </p>
                    </div>
                    {/* form */}
                    <form className="max-w-[664px] mx-auto flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-neutral-25">Name</label>
                            <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Enter Your Name"
                             />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-neutral-25">Email</label>
                            <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Enter Your Email"
                             />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-neutral-25">Message</label>
                            <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Enter Your Message"
                            rows={4}
                             />
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-3">
                            <label className="text-sm font-bold text-neutral-25 font-bold">Service</label>
                            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-8 gap-y-3">
                                {serviceOptions.map((service) => {
                                    const checked = selectedService.includes(service);
                                    return (
                                        <label
                                            key={service}
                                            className="flex items-center gap-2.5 cursor-pointer group">
                                                <span
                                                onClick={() => toggleService(service)}
                                                className={["w-4 h-4 rounded flex items-center justify-center border-2 cursor-pointer",
                                                checked ? "bg-primary-200 border-primary-200"
                                                : "border-gray-300 group-hover:border-gray-400"].join(" ")}>
                                                    {checked && (
                                                        <svg
                                                        width="10"
                                                        height="10"
                                                        viewBox="0 0 10 10"
                                                        fill="none"
                                                        >
                                                            <path
                                                                d="M2 5L4 7L8 3"
                                                                stroke="white"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    )}
                                                </span>
                                                <span onClick={() => toggleService(service)}
                                                className="text-sm select-none">
                                                    {service}
                                                </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>

                        <button
                        type="submit"
                        className="w-full mt-2 bg-primary-200 text-white font-semibold py-3.5 rounded-full hover:bg-primary-300 transition-colors cursor-pointer text-sm p-2 gap-1">
                            Send
                        </button>
                    </form>
                </div>
            </section>

            <Modal isOpen={modal.isOpen} onClose={handleCloseModal} type={modal.type}/>
        </>
    );
};

export default ContactSection;