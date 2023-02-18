import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.artic.edu/api/v1/artworks', (_request, response, context) =>
    response(
      context.status(200),
      context.json({
        data: [{
          artist_title: 'Mausch',
          title: 'Ein Strichmännchen'
        }]
      })
    )
  )
]
