export default function TodoList ({todoActivity, leftToDo, handleClick, filteredStatus, clearCompleted}) {
  return (
    <>
      <div className="w-full text-sm font-normal bg-white mt-6 dark:bg-veryDarkDesaturatedBlue shadow-md rounded-md overflow-hidden">
        {todoActivity}
        <div
          className="w-full flex justify-between text-darkGrayishBlue dark:text-darkGrayishBlue dark:border-veryDarkGrayBlue py-3 px-6  dark:bg-veryDarkDesaturatedBlue"
          draggable="true"
        >
          <p className="">{leftToDo} Items left</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleClick("all")}
              className={`hover:text-veryDarkBlue dark:hover:text-lightGrayishBlueHhover ${
                filteredStatus === "all" ? "text-slate-200" : "inherit"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleClick("active")}
              className={`hover:text-veryDarkBlue dark:hover:text-lightGrayishBlueHhover ${
                filteredStatus === "active" ? "text-slate-200" : "inherit"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => handleClick("completed")}
              className={`hover:text-veryDarkBlue dark:hover:text-lightGrayishBlueHhover ${
                filteredStatus === "completed" ? "text-slate-200" : "inherit"
              }`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={clearCompleted}
            className="hover:text-veryDarkBlue dark:hover:text-lightGrayishBlueHhover"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
}