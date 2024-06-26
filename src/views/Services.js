import { useState } from "react";

export default function Services() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.length < 15) {
        alert(`Please Specify Clearly The Need.`)
    } else {
        alert(`Form Submitted`)
        setName('')
        setEmail('')
        setPhone('')
        setInfo('')
    }
  }

  return (
    <main>
      <div>
        <form>
          <fieldset>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              value={name}
              id="name"
              className="input"
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              value={email}
              id="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              id="phone"
              className="input"
              onChange={(e) => setPhone(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="info" className="label">
              Info
            </label>
            <textarea
              value={info}
              className="info"
              onChange={(e) => setInfo(e.target.value)}
            />
          </fieldset>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </main>
  );
}