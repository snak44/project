import graphql from 'graphql-tag'

export default graphql`
    query listSauces{
        listSauces{
            items{
                id
                name
                price
                size
                details
                ingredients
                imgName
                ingredientsImg
                
            }
        }
    }
`