import "../Search/Search.scss";

export const Filter = ({ items, selectedItem, setSelectedItem, name }) => {
  return (
    <>
      <select
        name="items"
        className=" search-form items"
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option value="">
          <span>all {name}</span>
        </option>
        {items.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};
