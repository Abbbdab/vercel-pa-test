const Container = ({ children }) => {
  return (
    <main className="  bg-zinc-50 dark:bg-zinc-900 min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto p-4 md:p-6">{children}</div>
    </main>
  );
};
export default Container;
