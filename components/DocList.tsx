function DocList() {
  return (
    <section className="max-w-3xl mx-auto py-8 bg-white px-10 md:px-0">
      <div className="flex items-center justify-between text-sm text-gray-700">
        <h2 className="font-medium">My Documents</h2>
        <div className="flex space-x-4 items-center">
          <p>Date Created</p>
          <span className="material-icons"> folder </span>
        </div>
      </div>
    </section>
  );
}

export default DocList;
