import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input class="btn btn-outline-info my-2 my-sm-0" type="submit" value="Agregar" />
    </form>
  );
}
