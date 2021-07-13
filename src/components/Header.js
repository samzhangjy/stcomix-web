export default function Header(props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <header className="bg-base-200 shadow rounded-3xl" style={{ marginBottom: "20px" }}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">
            {props.title}
          </h1>
          <span>{props.desc}</span>
        </div>
      </header>
      <div class="divider" />
    </div>
  );
}
