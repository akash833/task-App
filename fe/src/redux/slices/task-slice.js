import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1001,
            title: "Grocery Shopping",
            description: "Buy groceries for the week, including fresh fruits like apples and bananas, green vegetables such as spinach and broccoli, dairy products including milk and cheese, and staple items like bread, rice, and eggs. Remember to check for discounts and use the shopping list to ensure nothing is missed.",
            due_date: "2024-08-12",
            priority: "High",
            location_reminder: "Supermarket",
            isCompleted: true // New field
        },
        {
            id: 1002,
            title: "Team Meeting",
            description: "Participate in the bi-weekly team meeting to discuss project milestones. The agenda includes reviewing the current sprint, identifying any blockers, reassigning tasks as necessary, and planning for the upcoming sprint. Ensure all reports are ready, and be prepared to provide updates on your tasks.",
            due_date: "2024-08-10",
            priority: "Medium",
            location_reminder: "Office",
            isCompleted: false // New field
        },
        {
            id: 1003,
            title: "Doctor's Appointment",
            description: "Attend the annual health check-up with Dr. Smith. Make sure to bring any medical records or test results from the past year. Topics to discuss include general health, any recurring issues, medication adjustments, and scheduling any required follow-up tests or specialist visits.",
            due_date: "2024-08-14",
            priority: "High",
            location_reminder: "Clinic",
            isCompleted: true // New field
        },
        {
            id: 1004,
            title: "Finish Reading Book",
            description: "Complete the final 100 pages of 'Atomic Habits' by James Clear. Focus on the chapters covering advanced habit-forming techniques and the summary of key takeaways. Consider how the concepts can be applied to your personal and professional life.",
            due_date: "2024-08-15",
            priority: "Low",
            location_reminder: "Home",
            isCompleted: false // New field
        },
        {
            id: 1005,
            title: "Submit Project Report",
            description: "Finalize the project report for the client, ensuring all sections are thoroughly reviewed for accuracy. Include detailed analyses, outcomes, and recommendations. Prepare the report in both PDF and Word formats. Ensure the report is submitted via email by the end of the day.",
            due_date: "2024-08-11",
            priority: "High",
            location_reminder: "Office",
            isCompleted: true // New field
        },
        {
            id: 1006,
            title: "Pick up Dry Cleaning",
            description: "Collect clothes from the dry cleaner, including the suit and dress shirts that were dropped off last week. Check the items for any remaining stains or issues before leaving the shop. Ensure the receipt is kept for record-keeping.",
            due_date: "2024-08-09",
            priority: "Medium",
            location_reminder: "Dry Cleaner",
            isCompleted: true // New field
        },
        {
            id: 1007,
            title: "Call Mom",
            description: "Have a phone conversation with Mom to catch up on family news and updates from the past week. Discuss any upcoming family events, and ask if she needs any help with her errands or appointments. Plan a visit if possible.",
            due_date: "2024-08-13",
            priority: "Low",
            location_reminder: "Home",
            isCompleted: true // New field
        },
        {
            id: 1008,
            title: "Car Maintenance",
            description: "Take the car to the auto shop for scheduled maintenance. This includes an oil change, tire rotation, brake check, and fluid top-ups. Ask the mechanic to check for any other potential issues and get an estimate for any needed repairs.",
            due_date: "2024-08-18",
            priority: "Medium",
            location_reminder: "Auto Shop",
            isCompleted: true // New field
        },
        {
            id: 1009,
            title: "Prepare Presentation",
            description: "Create a detailed slide deck for the upcoming client presentation. Include an introduction, key findings, recommendations, and a Q&A section. Ensure the design is clean and professional, with charts and visuals that clearly illustrate the points being made.",
            due_date: "2024-08-16",
            priority: "High",
            location_reminder: "Office",
            isCompleted: false // New field
        },
        {
            id: 1010,
            title: "Plan Weekend Getaway",
            description: "Research and book accommodations for a relaxing weekend getaway. Consider destinations that offer outdoor activities, good restaurants, and scenic views. Compare prices and read reviews to ensure the best experience. Prepare a packing list and finalize travel plans.",
            due_date: "2024-08-20",
            priority: "Low",
            location_reminder: "Home",
            isCompleted: true // New field
        }
    ]
};


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { id, title, description, due_date, location_reminder, priority } = action.payload;
            state.tasks.push({ id, title, description, due_date, location_reminder, priority });
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        editTask: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }
                return task;
            })
        },
        toggleTaskCompletion: (state, action) => {
            const { id } = action.payload;
            const taskIndex = state.tasks.findIndex(task => task.id === id);
            if (taskIndex !== -1) {
                state.tasks[taskIndex].isCompleted = !state.tasks[taskIndex].isCompleted;
            }
        }
    }
});

export const { addTask, deleteTask, editTask, toggleTaskCompletion } = taskSlice.actions;

export default taskSlice.reducer;
