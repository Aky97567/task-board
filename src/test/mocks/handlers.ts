import { rest } from 'msw'

export const handlers = [
  rest.get('/api/tasks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([{ id: 1, title: 'Test Task', status: 'TODO' }]))
  }),
]
