import { Outlet } from 'react-router-dom';

export default function Movies() {
  const handleChange = e => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <Outlet />
    </div>
  );
}
