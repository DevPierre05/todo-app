export default function TodoInputForm({submit, handleChange, formData}) {
  
  return (
    <>
      <form onSubmit={submit} className="w-full mt-4">
        <input
          className="w-full border-none cursor-pointer dark:bg-veryDarkDesaturatedBlue dark:placeholder-lightGrayishBlue dark:text-[#fafafa] p-4 md:p-4 text-sm rounded-md shadow-md outline-none"
          name="todo"
          type="text"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={formData.todo}
        />
      </form>
    </>
  );
}
