import ContentItemsStyled from "./ContentItemsStyled";

const ContentItems = ({ currentLink, link, object, onHandleClickLink }) => {
  return (
    <ContentItemsStyled>
      <p className="link_text" onClick={onHandleClickLink}>
        {link}
      </p>
      {currentLink === link && object && (
        <div className="entitiesInfo_box">
          {object.title && <p className="link_items">{object.title}</p>}

          {object.opening_crawl && (
            <p className="link_items">{object.opening_crawl}</p>
          )}

          {object.episode_id && (
            <p className="link_items">episode: ({object.episode_id})</p>
          )}

          {object.release_date && (
            <p className="link_items">
              release date: {object.release_date.split("-").reverse().join("-")}
            </p>
          )}

          {object.director && (
            <p className="link_items">director: {object.director}</p>
          )}

          {object.producer && (
            <p className="link_items">producer: {object.producer}</p>
          )}

          {object.name && <p className="link_items">name: {object.name}</p>}

          {object.height && (
            <p className="link_items">height: {object.height}</p>
          )}

          {object.mass && <p className="link_items">mass: {object.mass}</p>}

          {object.hair_color && (
            <p className="link_items">hair color: {object.hair_color}</p>
          )}

          {object.skin_color && (
            <p className="link_items">skin color: {object.skin_color}</p>
          )}

          {object.eye_color && (
            <p className="link_items">eye color: {object.eye_color}</p>
          )}

          {object.gender && (
            <p className="link_items">gender: {object.gender}</p>
          )}

          {object.model && <p className="link_items">model: {object.model}</p>}

          {object.starship_class && (
            <p className="link_items">
              starship class:
              {object.starship_class}
            </p>
          )}

          {object.passengers && (
            <p className="link_items">passanger: {object.passengers}</p>
          )}

          {object.diameter && (
            <p className="link_items">diameter: {object.diameter}</p>
          )}

          {object.population && (
            <p className="link_items">population: {object.population}</p>
          )}

          {object.gravity && (
            <p className="link_items">gravity: {object.gravity}</p>
          )}

          {object.rotation_period && (
            <p className="link_items">
              rotation period: {object.rotation_period}
            </p>
          )}

          {object.films && (
            <ul className="">
              films:
              {object.films.map((links) => (
                <li className="link_text" key={links}>
                  {links}
                </li>
              ))}
            </ul>
          )}

          {object.residents && (
            <ul className="">
              residents:
              {object.residents.map((links) => (
                <li className="link_text" key={links}>
                  {links}
                </li>
              ))}
            </ul>
          )}

          {object.pilots && (
            <ul className="">
              pilots:
              {object.pilots.map((links) => (
                <li className="link_text" key={links}>
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
