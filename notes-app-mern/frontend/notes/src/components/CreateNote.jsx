import { homeContext } from "./Context/Context";
import { useContext } from "react";
function CreateNote(){
   const {CreateNoteOpen,setCreateNoteOpen}=useContext(homeContext);
    return(
        <>
            {/* Create Note Modal Overlay */}
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-50">

  {/* Modal Card */}
  <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900">
        Create New Note
      </h2>

      <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition"onClick={(e) => {
          setCreateNoteOpen(false);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 text-slate-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    {/* Form Body */}
    <div className="p-6 space-y-5">

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Note Title
        </label>

        <input
          type="text"
          placeholder="Enter note title..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Description
        </label>

        <textarea
          rows="6"
          placeholder="Write your note here..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl resize-none outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
        />
      </div>

    </div>

    {/* Footer */}
    <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-slate-200 bg-slate-50">

      <button className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition" onClick={(e) => {
          setCreateNoteOpen(false);
      }}>
        Cancel
      </button>

      <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition shadow-sm" onClick={(e) => {
          setCreateNoteOpen(false);
      }}>
        Save Note
      </button>

    </div>

  </div>

</div> 
        </>
    )
}
export default CreateNote