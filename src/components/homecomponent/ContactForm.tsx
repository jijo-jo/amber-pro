import React, { useState } from "react";
import InputField from "../globalcomponents/InputField";
import Button from "../globalcomponents/ButtonSubmit";
import { isValidPhoneNumber } from "libphonenumber-js";

const ContactForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    occupation: "",
    message: "",
  });

  // State for error messages
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate Form
  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        occupation: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-black text-white px-6 py-12 sm:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section - Text Content */}
        <div>
          <h2 className="text-5xl font-semibold">Let’s Connect</h2>
          <p className="text-gray-300 mt-4">
            Have questions about making your home smarter, safer, and more
            efficient? We’re here to help! Whether you’re looking for
            personalized automation solutions, expert advice, or product
            details, our team at <span className="font-bold">Curiousfly</span> is ready to assist you.
          </p>
        </div>

        {/* Right Section - Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <InputField name="firstName" placeholder="First Name *" required value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}

          <InputField name="lastName" placeholder="Last Name *" required value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}

          <InputField name="email" type="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <InputField name="phone" type="tel" placeholder="Phone *" required value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <InputField name="country" placeholder="Country *" required value={formData.country} onChange={handleChange} />
          {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

          <InputField name="state" placeholder="State *" required value={formData.state} onChange={handleChange} />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}

          <InputField name="city" placeholder="City *" required value={formData.city} onChange={handleChange} />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

          <InputField name="occupation" placeholder="Occupation *" required value={formData.occupation} onChange={handleChange} />
          {errors.occupation && <p className="text-red-500 text-sm">{errors.occupation}</p>}

          {/* Textarea */}
          <div className="col-span-1 sm:col-span-2">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Hello, I am a...*"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-500 bg-gray-200 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 flex justify-center sm:justify-start">
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

