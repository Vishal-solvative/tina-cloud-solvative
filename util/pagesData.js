import {client} from '../tina/__generated__/client'

export const fetchPages = async () => {
    try {
        const response = await fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
    query {
      pageConnection {
        edges {
          node {
            _sys {
              filename
            }
            id
          }
        }
      }
    }
  `
            })
        })

        if (!response.ok) {
            throw new Error('Failed to fetch pages')
        }

        const {data} = await response.json()
        const fetchedPages = data.pageConnection.edges.map(edge => ({
            filename: edge.node._sys.filename,
            id: edge.node.id
        }))

        return fetchedPages
    } catch (error) {
        console.error(error)
    }
}

export const fetchBlogPages = async () => {
    try {
        const response = await fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
  query {
    blogsConnection {
      edges {
        node {
          _sys {
            filename
          }
          id
        }
      }
    }
  }
`
            })
        })

        if (!response.ok) {
            throw new Error('Failed to fetch pages')
        }

        const {data} = await response.json()
        const fetchedPages = data.blogsConnection.edges.map(edge => ({
            filename: edge.node._sys.filename,
            id: edge.node.id
        }))

        return fetchedPages
    } catch (error) {
        console.error(error)
    }
}

export const FETCH_PAGES = async () => {
    try {
        const response = await client.queries.pageConnection()
        const paths = response.data?.pageConnection.edges.map(edge => ({
            filename: edge.node._sys.breadcrumbs
        }))
        return paths || []
    } catch (error) {
        console.log(error)
    }
}

export const FETCH_BLOGS = async () => {
    try {
        const response = await client.queries.blogsConnection()
        const paths = response.data?.blogsConnection.edges.map(edge => ({
            filename: edge.node._sys.breadcrumbs
        }))
        return paths || []
    } catch (error) {
        console.log(error)
    }
}
