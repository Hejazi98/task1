import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { heroService } from "@/_services";

function Managment({ match }) {
  const { path } = match;
  const [heros, setHero] = useState(null);

  useEffect(() => {
    console.log("managment");
    heroService.getAll().then((x) => setHero(x));
  }, []);

  function deleteHero(id) {
    setHero(
      heros.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    heroService.delete(id).then(() => {
      setHero((heros) => heros.filter((x) => x.id !== id));
    });
  }

  let search = (e) => {
    let val = e.target.value.toLowerCase();

    let hero = heros.filter((hero) => {
      return (
        hero.name.toLowerCase().includes(`${val}`) ||
        hero.powers.toLowerCase().includes(`${val}`)
      );
    });
    if (val === "") {
      heroService.getAll().then((x) => setHero(x));
    }
    setHero(hero);
  };

  return (
    <div>
      <h1>Heros</h1>
      <Link to={`${path}add`} className="btn btn-sm btn-success mb-2">
        Add Hero
      </Link>

      <input
        name="val"
        type="text"
        className={`form-control`}
        placeholder="search"
        onChange={search}
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Heor Name</th>
            <th style={{ width: "30%" }}>Power</th>
            <th style={{ width: "30%" }}>Rate</th>
            <th style={{ width: "10%" }}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {heros &&
            heros.map((hero) => (
              <tr style={{ verticalAlign: "middle" }} key={hero.id}>
                <td>{hero.name}</td>
                <td>{hero.powers}</td>
                <td>
                  <ReactStars size={25} half={false} value={hero.rate} />
                </td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <Link title="details" to={`${path}details/${hero.id}`}>
                    <i class="bi bi-ticket-detailed-fill"></i>
                  </Link>
                  <Link
                    style={{ paddingLeft: "5px" }}
                    title="edit"
                    to={`${path}edit/${hero.id}`}
                  >
                    <i class="bi bi-pencil-fill"></i>
                  </Link>
                  <a
                    style={{ paddingLeft: "5px" }}
                    title="delete"
                    onClick={() => deleteHero(hero.id)}
                    disabled={hero.isDeleting}
                  >
                    {hero.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <i class="bi bi-trash2-fill"></i>
                    )}
                  </a>
                </td>
              </tr>
            ))}
          {!heros && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="spinner-border spinner-border-lg align-center"></div>
              </td>
            </tr>
          )}
          {heros && !heros.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">No Heros To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export { Managment };
