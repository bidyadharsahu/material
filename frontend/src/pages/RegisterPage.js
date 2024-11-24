
import React from 'react';

function RegisterPage() {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <select>
          <option>Degree</option>
          <option>Bachelor</option>
          <option>Master</option>
        </select>
        <select>
          <option>Semester</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>
        <input type="text" placeholder="University Name" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
    