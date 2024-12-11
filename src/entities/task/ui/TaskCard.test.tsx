import { describe, it, expect } from 'vitest'
import { render, screen } from '../../../test/test-utils'
import {TaskCard}  from './TaskCard'  // removed {} here because i added TaskCard.tsx sample file

describe('TaskCard', () => {
  it('renders task title', () => {
    render(<TaskCard title="Test Task" status="TODO" />)
    expect(screen.getByText('Test Task')).toBeInTheDocument()
  })
})