export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </footer>
    );

  const totalItems = items.length;
  const packagedItems = items.filter((item) => item.packed).length;
  const packagedPercent = Math.round((packagedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packagedPercent === 100
          ? "You got everything! Ready to go 🦼"
          : `👜 You hav ${totalItems} items in your package list, and you already
            packaged ${packagedItems} (${packagedPercent}%)`}
      </em>
    </footer>
  );
}
