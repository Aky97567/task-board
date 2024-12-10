import React, { forwardRef } from 'react';

interface TaskCardProps {
  title: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}

const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(({ title, status }, ref) => (
  <div ref={ref} style={{ border: '1px solid gray', padding: '16px', borderRadius: '8px' }}>
    <h3>{title}</h3>
    <p>Status: {status}</p>
  </div>
));

export default TaskCard;
