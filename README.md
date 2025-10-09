Postman123 is a modern, full-stack API client inspired by Postman — built from scratch.

🔹 Workspace & Collection Management
 ->Create and manage collections and folders.
 ->Add multiple requests (GET, POST, PUT, DELETE, etc.) per collection.
 ->Rename, delete, or reorder collections and requests.
 ->Collections persist automatically using Prisma + PostgreSQL. 
🔹 Smart Tab System
 ->Open multiple requests in tabs simultaneously.
 ->Each collection maintains its own open request state.
 ->Automatically restores previously opened tabs when reloading or reopening the app.
🔹 Optimistic UI
 ->Instant state updates when editing collections or requests — even before server confirmation.
 ->Background syncing ensures consistency with database.
 ->Fast tab switching and minimal re-rendering using zustand slices.
🔹 Global State Sync
 ->All components (sidebar, editor, response viewer) sync globally using Zustand.
 ->Updates propagate instantly across the entire UI.
 ->No redundant API calls or prop drilling.
🔹 Request Runner
 ->Supports all REST methods (GET, POST, PUT, PATCH, DELETE).
 ->Uses Axios under the hood with a performance timer and response-size counter.
 ->Displays detailed status code, headers, response body, and duration.
 ->Optimistic request logging to show results instantly while saving to DB in the background. 
