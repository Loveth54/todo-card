Advanced Todo Card (Stage 1)
** Overview**
This project is an extension of the Stage 0 Todo Card. It has been enhanced to include interactivity, state management, and improved accessibility.
** What Changed from Stage **
- Added edit functionality (update title, description, priority, and due date)
- Introduced status control (Pending, In Progress, Done)
- Implemented dynamic time tracking
- Added overdue indicator
- Added expand/collapse for long descriptions
- Introduced priority indicator with visual color changes
- Improved synchronization between checkbox, status, and UI
** New Design Decisions**
- Used a clean card-based layout for clarity and readability
- Applied color indicators for priority (Low, Medium, High)
- Kept interactions simple and intuitive (Edit, Save, Cancel)
- Used collapsible sections to manage long content
- Ensured layout works across mobile and desktop screens
** Known Limitations**
- Supports only a single todo item (not a full app)
- Delete button is not persistent (no backend storage)
- Time updates are approximate (based on interval refresh)
- No data persistence (refresh resets the state)
** Accessibility Notes**
- Used semantic HTML elements (article, button, label, time)
- All interactive elements are keyboard accessible
- Added aria attributes for:
  - Expand/collapse (aria-expanded, aria-controls)
  - Live time updates (aria-live="polite")
- Ensured buttons have clear accessible names
- Checkbox includes proper labeling
**  Live Demo**
https://loveth54.github.io/todo-card

## GitHub Repository
https://github.com/Loveth54/todo-card
