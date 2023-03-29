export default function TodoTemplate({i, element, styles, updateData, deleteTask }) {
  return (
    <div
      key={`item ${i}`}
      className="group w-full flex justify-between text-veryDarkGrayishBlue dark:text-lightGrayishBlue dark:border-veryDarkGrayBlue border-b py-4 px-6  dark:bg-veryDarkDesaturatedBlue"
    >
      <div className="">
        <label className="container">
          <input
            onClick={() => updateData(element.id)}
            className=""
            type="checkbox"
            // checked={element.completed}
            // name={element.content}
          />
          <span className="flex gap-6">
            <span
              style={styles}
              className="ml-0 border border-slate-600 w-5 h-5 rounded-full bg-white dark:bg-transparent + {}"
            >
              {element.completed && (
                <div className="border rotate-45 ml-2 w-1 h-3 border-t-0 border-r-2 border-l-0 border-b-1"></div>
              )}
            </span>
            <span className={element.completed ? "line-through" : ""}>
              {element.content}
            </span>
          </span>
        </label>
      </div>

      <svg
        onClick={() => deleteTask(element.id)}
        className="cursor-pointer md:hidden md:group-hover:block"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </div>
  );
}
