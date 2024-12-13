import React,{useState} from "react";

function FormData(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target

       setFormData(prevData=>({
        ...prevData,
        [name]: value
       }))
    }

    

    const handleSubmit = (e)=>{
        e.preventDefaule()

        alert('Form submitted successfully')

        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              required
            ></textarea>
          </label>
        </div>
        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {/* Display form data */}
      <div style={{ marginTop: "20px" }}>
        <h3>Form Data Preview:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
    </div>
    )

}

export default FormData