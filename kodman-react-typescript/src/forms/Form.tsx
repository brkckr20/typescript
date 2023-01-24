import { ChangeEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    team: "",
    isAgreed: false,
  });

  const formChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, isAgreed: checked }));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        <label>
          Name :
          <input
            type="text"
            placeholder="Your Fist Name"
            name="firstName"
            onChange={formChange}
            value={formData.firstName}
          />
        </label>
        <br />
        <label>
          Lastname :
          <input
            type="text"
            placeholder="Your Last Name"
            name="lastName"
            onChange={formChange}
            value={formData.lastName}
          />
        </label>
        <br />
        <label>
          Lastname :
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={formChange}
            value={formData.email}
          />
        </label>
        <br />
        <label htmlFor="">Comment : </label>
        <textarea
          placeholder="Your Message"
          name="message"
          onChange={formChange}
          value={formData.message}
        ></textarea>
        <div className="radiobuttons">
          <input
            type="radio"
            id="gs"
            name="team"
            value="GS"
            onChange={formChange}
            checked={formData.team === "GS"}
          />
          <label htmlFor="gs">GS</label>
          <input
            type="radio"
            id="fb"
            name="team"
            value="FB"
            onChange={formChange}
            checked={formData.team === "FB"}
          />
          <label htmlFor="fb">FB</label>
          <input
            type="radio"
            id="bjk"
            name="team"
            value="BJK"
            onChange={formChange}
            checked={formData.team === "BJK"}
          />
          <label htmlFor="bjk">BJK</label>
        </div>

        <div>
          Alan seçiniz
          <br />
          <input
            type="checkbox"
            name="terms"
            checked={formData.isAgreed}
            onChange={handleCheckbox}
          />
          <label>Kullanım şartları</label>
        </div>
        <div>
          <button type="submit">Göster</button>
        </div>
      </form>
      <p>Name : {formData.firstName}</p>
      <p>lastName : {formData.lastName}</p>
      <p>mail : {formData.email}</p>
      <p>message : {formData.message}</p>
      <p>Team : {formData.team}</p>
      <p>checked : {formData.isAgreed ? "True" : "False"}</p>
    </div>
  );
};

export default Form;
