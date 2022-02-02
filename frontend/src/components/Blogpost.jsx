import { Link } from "react-router-dom";
import styled from "styled-components";

const Article = styled.article`
  background-color: pink;
  width: 90%;
  margin: 5rem auto;
  padding: 2rem;
  text-align: center;
`;
const Header = styled.header`
  border: 1 px solid red;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Author = styled.h2`
  font-size: 18px;
`;

const Body = styled.p``;

const Button = styled.button`
  padding: 1rem 3rem;
  margin: 1rem;
`;

const Blogpost = (props) => {
  return (
    <Article>
      <Header>
        <Title>{props.title}</Title>
        <Author>{props.author}</Author>
      </Header>
      <Body>{props.body}</Body>
      <Link to={"/edit/" + props.id} />
      <Button>Edit</Button>
    </Article>
  );
};

export default Blogpost;
