const categoryStyles = {
  Tech: {
    backgroundColor: "#dbeafe",
    borderColor: "#bfdbfe",
    color: "#1e40af",
  },
  Sports: {
    backgroundColor: "#dcfce7",
    borderColor: "#bbf7d0",
    color: "#166534",
  },
  Faith: {
    backgroundColor: "#f3e8ff",
    borderColor: "#e9d5ff",
    color: "#6b21a8",
  },
  Social: {
    backgroundColor: "#ffedd5",
    borderColor: "#fed7aa",
    color: "#9a3412",
  },
};

export default function CategoryBadge({ category }) {
  return (
    <span className="category-badge" style={categoryStyles[category]}>
      {category}
    </span>
  );
}
