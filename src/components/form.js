import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      await axios.post("http://localhost:3000/send-email", formData);
      setStatus("E-mail enviado com sucesso!");
    } catch (error) {
      setStatus("Erro ao enviar o e-mail.");
      console.error(error);
    }
  };

  return (
    <div className="p-6space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-white">Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md font-medium text-white bg-transparent focus:bg-white focus:text-black border-white focus:border-black"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-lg font-medium text-white">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md font-medium text-white bg-transparent focus:bg-white focus:text-black border-white focus:border-black"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-white">Mensagem</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md font-medium text-white bg-transparent focus:bg-white focus:text-black border-white focus:border-black"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary font-bold  text-white py-2 px-4 rounded-full hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
      {status && <p className="text-center mt-4 text-white">{status}</p>}
    </div>
  );
};

export default Form;
