import  { useState } from 'react';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Profile Pic: ${profilePic}`);
  };
console.log(profilePic)
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <CloudinaryUploadWidget
        onSuccess={(url) => setProfilePic(url)} // Set the uploaded image URL
      />
      <br />
      {profilePic && <img src={profilePic} alt="Profile" style={{width: '100px', height: '100px'}} />}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
