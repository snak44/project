import graphql from 'graphql-tag'

export default graphql`
    mutation createProduct(
        $id: ID!
        $name: String!
        $ingredients: [String]!
        $directions:  [String!]
        
    ) {
        createProduct(input: {
            id: $id, name: $name, ingredients: $ingredients, directions: $directions
        }) {
            id
            name
            ingredients
            directions
            
        }
    }
`