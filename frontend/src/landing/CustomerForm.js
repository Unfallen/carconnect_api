// CustomerForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        postcode: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const validateForm = () => {
        const newErrors = {};

        // Check for required fields
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }


        try {
            await axios.post('http://localhost:5000/api/customer', formData);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </label>
            <br />
            <label>
                Phone Number:
                <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
            </label>
            <br />
            <label>
                Postcode:
                <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                />
                {errors.postcode && <span>{errors.postcode}</span>}
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomerForm;
