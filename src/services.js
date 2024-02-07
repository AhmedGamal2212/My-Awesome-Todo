export const fetchTasks = () => {
    return Array(7)
        .fill(0)
        .map((x, idx) => {
            return {
                id: idx,
                title: `task number ${idx}`,
                description: `description of task number ${idx}`,
                dueDate: '2024-01-22',
                priority: idx % 2 ? 'H' : 'L',
                status: (idx % 5) % 2 === 1,
            };
        });
};
