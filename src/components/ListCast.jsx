import { useState, useEffect } from "react";
import { resolvePackageEntry } from "vite";

export default () => {
  const [cast, setCast] = useState([]);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return(
    <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, fr))`,
        gap: `1rem`,
        marginBottom: `1rem`
      }
    }>
      {
        cast.map(member => (
          <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
        ))
      }
    </div>
  )
}

