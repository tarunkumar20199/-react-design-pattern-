import Card from "./card";
export const MorePatterns = () => {
  return (
    <Card>
      <Card.Header>
        <h1 style={{ margin: "0" }}>Header</h1>
      </Card.Header>
      <Card.Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius
        nostrum id commodi quidem ab esse, neque beatae saepe quae, pariatur
        reprehenderit officia. Quae, deleniti quibusdam! Earum sunt error
        corrupti!Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Repellendus adipisci ab fuga eos quasi
        soluta quod cupiditate, laborum facilis officia, ex enim, temporibus
        saepe placeat! Aperiam rerum corrupti debitis mollitia.
      </Card.Body>
      <Card.Footer>
        <button>Ok</button>
        <button>Cancel</button>
      </Card.Footer>
    </Card>
  );
};
