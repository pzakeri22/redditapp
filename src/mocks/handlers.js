import {rest} from 'msw';

export const handlers = [
    rest.get('https://www.reddit.com/r/all.json', (req, res, ctx) => {
        return res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json({
                username: 'admin',
            }),
        )
    }),
]
