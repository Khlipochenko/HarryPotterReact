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
          {name}
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
