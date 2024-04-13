function RoomCategoryList({ categories, selectedCategory, setSelectedCategory }) {
    return (
      <ul className="room-category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    );
  }
  
  export default RoomCategoryList;
  