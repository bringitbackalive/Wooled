import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
display: flex;

margin : 50px;
flex-flow: row wrap;
justify-content: flex-start;
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;