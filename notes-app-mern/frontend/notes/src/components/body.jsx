import { homeContext } from "./Context/Context";
import { useContext } from "react";
function Body() {
  const {CreateNoteOpen,setCreateNoteOpen}=useContext(homeContext);
  return (
    <>
      <div className="min-h-screen bg-slate-50 px-6 py-8">
        {/* Notes Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Note Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                React Fundamentals
              </h2>

              <p className="text-slate-600 leading-relaxed line-clamp-5">
                Learn React components, props, state management, hooks,
                conditional rendering, list rendering, event handling, and best
                practices for building modern user interfaces.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6">
              {/* Edit Button */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a2.25 2.25 0 1 1 3.182 3.182L10.582 17.13a4.5 4.5 0 0 1-1.897 1.13L6 19l.74-2.685a4.5 4.5 0 0 1 1.13-1.897L16.862 4.487Z"
                  />
                </svg>
                Edit
              </button>

              {/* Delete Button */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7.5h12m-10.5 0v10.125A2.625 2.625 0 0 0 10.125 20.25h3.75A2.625 2.625 0 0 0 16.5 17.625V7.5M9.75 7.5V5.625A1.875 1.875 0 0 1 11.625 3.75h.75A1.875 1.875 0 0 1 14.25 5.625V7.5"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Floating Add Note Button */}
        <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-xl flex items-center justify-center text-white transition duration-300" onClick={(e) => {
              setCreateNoteOpen(true);
            }
            }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-8 h-8" 
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
export default Body;
