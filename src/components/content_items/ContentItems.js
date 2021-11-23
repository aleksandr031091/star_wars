import ContentItemsStyled from "./ContentItemsStyled";

const ContentItems = ({ currentLink, link, object, onHandleClickLink }) => {
  return (
    <ContentItemsStyled>
      <p className="characters_link_text" onClick={onHandleClickLink}>
        {link}
      </p>
      {currentLink === link && object && (
        <div className="entitiesInfo_box">
          {object.title && <p className="film_items">{object.title}</p>}
          {object.opening_crawl && (
            <p className="film_items">{object.opening_crawl}</p>
          )}

          {object.episode_id && (
            <p className="film_items">episode: ({object.episode_id})</p>
          )}

          {object.release_date && (
            <p className="film_items">
              release date: {object.release_date.split("-").reverse().join("-")}
            </p>
          )}

          {object.director && (
            <p className="film_items">director: {object.director}</p>
          )}

          {object.producer && (
            <p className="film_items">producer: {object.producer}</p>
          )}

          {object.name && (
            <p className="entitiesInfo_items">name: {object.name}</p>
          )}

          {object.height && (
            <p className="entitiesInfo_items">height: {object.height}</p>
          )}

          {object.mass && (
            <p className="entitiesInfo_items">mass: {object.mass}</p>
          )}

          {object.hair_color && (
            <p className="entitiesInfo_items">
              hair color: {object.hair_color}
            </p>
          )}

          {object.skin_color && (
            <p className="entitiesInfo_items">
              skin color: {object.skin_color}
            </p>
          )}

          {object.eye_color && (
            <p className="entitiesInfo_items">eye color: {object.eye_color}</p>
          )}

          {object.gender && (
            <p className="entitiesInfo_items">gender: {object.gender}</p>
          )}

          {object.model && (
            <p className="entitiesInfo_items">model: {object.model}</p>
          )}

          {object.starship_class && (
            <p className="entitiesInfo_items">
              starship class:
              {object.starship_class}
            </p>
          )}

          {object.passengers && object.passengers === "unknown" ? null : (
            <p className="entitiesInfo_items">passanger: {object.passengers}</p>
          )}

          {object.diameter && (
            <p className="entitiesInfo_items">diameter: {object.diameter}</p>
          )}

          {object.population && (
            <p className="entitiesInfo_items">
              population: {object.population}
            </p>
          )}

          {object.gravity && (
            <p className="entitiesInfo_items">gravity: {object.gravity}</p>
          )}

          {object.rotation_period && (
            <p className="entitiesInfo_items">
              rotation period: {object.rotation_period}
            </p>
          )}

          {object.films && (
            <ul className="">
              films:
              {object.films.map((links) => (
                <li className="characters_link_text" key={links}>
                  {links}
                </li>
              ))}
            </ul>
          )}

          {object.residents && (
            <ul className="">
              residents:
              {object.residents.map((links) => (
                <li className="characters_link_text" key={links}>
                  {links}
                </li>
              ))}
            </ul>
          )}

          {object.pilots && (
            <ul className="">
              pilots:
              {object.pilots.map((links) => (
                <li className="characters_link_text" key={links}>
                  {links}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </ContentItemsStyled>
  );
};

export default ContentItems;
