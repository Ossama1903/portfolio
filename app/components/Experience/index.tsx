const Experience = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 grid grid-cols-12 h-fit">
        <button
          className="text-xl text-purple-400 border-none col-span-12 py-2 bg-transparent"
          style={{ borderLeft: "1px solid yellow" }}
        >
          Musketeers
        </button>
        <button className="text-xl text-purple-400 border-none col-span-12 py-2 bg-transparent">
          Devsinc
        </button>
        <button className="text-xl text-purple-400 border-none col-span-12 py-2 bg-transparent">
          Devclub
        </button>
      </div>
      <div className="col-span-9">
        <h2 className="mb-2">Backend Developer @Musketeers Tech</h2>
        <h4 className="mb-5">Dec 2023 - Present</h4>
        <ul>
          <li className="mb-5">
            <p>
              Collaborated with other student designers and engineers on
              pro-bono projects to create new brands, design systems, and
              websites for organizations in the community
            </p>
          </li>
          <li>
            <p>
              Collaborated with other student designers and engineers on
              pro-bono projects to create new brands, design systems, and
              websites for organizations in the community
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
