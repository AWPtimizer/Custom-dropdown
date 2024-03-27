import Select from "react-select";

const CustomSelect = ({
  options,
  isMultiSelect,
  isSearchable,
  showImages,
  ...rest
}) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    valueContainer: (provided) => ({
      ...provided,
      display: "flex",
      flexWrap: "wrap",
    }),
    multiValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  const formatOptionLabel = ({ label, image, header, body, footer }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {showImages && image && (
        <img
          src={image}
          alt={label}
          style={{ marginRight: "8px", width: "24px", height: "24px" }}
        />
      )}
      <div>
        <div>{header}</div>
        <div>{body}</div>
        <div>{footer}</div>
      </div>
    </div>
  );

  return (
    <div className="select-container">
      <Select
        options={options}
        isMulti={isMultiSelect}
        isSearchable={isSearchable}
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
        {...rest}
      />
    </div>
  );
};

export default CustomSelect;
