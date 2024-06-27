import { useState, useEffect } from "react"

export default function Home() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [minDate, setMinDate] = useState('');
    const [minTime, setMinTime] = useState('');

    useEffect(() => {
        const current_time = new Date().toLocaleTimeString().replace(/:\d{2}$/, '');
        setMinTime(current_time);
    }, []);

    useEffect(() => {
        const current_date = new Date().toISOString().split("T")[0];
        setMinDate(current_date);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length >=5 || email.length >= 10) {
            alert(`Appointment Scheduled`)
            setName('')
            setEmail('')
            setDate('')
            setTime('')
        } else {
            alert(`Complete Appointment Scheduling`)
        }
    }

    return (
        <main>
            <div>
                <h3 className="page-header">Book A Schedule</h3>
            </div>
            <form>
                <div className="fieldset">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input id="name" type="text" value={name} className="input" onChange={e => setName(e.target.value)} />
                </div>
                <div className="fieldset">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input id="email" type="email" value={email} className="input" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="fieldset">
                    <label htmlFor="date">
                        Date
                    </label>
                    <input id="date" type="date" value={date} className="input" onChange={e => setDate(e.target.value)} min={minDate} max='2024-10-20' />
                </div>
                <div className="fieldset">
                    <label htmlFor="time">
                        Time
                    </label>
                    <input id="time" type="time" value={time} className="input" onChange={e => setTime(e.target.value)} min={minTime} />
                </div>
                <div className="btn-frame">
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </main>
    )
}