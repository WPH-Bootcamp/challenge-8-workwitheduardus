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

cosnt ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [selectedService, setSelectedService] = useState<string[]>([]);
    const [modal, setModal] = useState<{isOpen: Boolean;
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
            <section>
                
            </section>
        </>