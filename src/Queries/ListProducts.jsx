import graphql from 'graphql-tag'

export default graphql`
    query listProduct{
        listProducts{
            items{
                id
                name
                ingredients
                directions
            }
        }
    }
`