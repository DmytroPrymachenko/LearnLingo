import Select from "react-select";
import {
  FilterInputDivLanguages,
  FilterInputDivLevel,
  FilterInputDivPrice,
  TeachersFilterDiv,
  TeachersFilterSpan,
} from "./TeachersFilter.Styles";
import { useEffect, useState } from "react";

const customComponents = {
  padding: "0",

  //   dropdownIndicator: () => ({ display: "none" }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#F4C550" : "#121417",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    ":hover": {
      color: state.isFocused ? "#F4C550" : "#121417",
    },
    ":active": {
      transform: "rotate(0deg)",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    fontSize: "16px",

    paddingLeft: "18px",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    overflowY: "hidden",
    width: "100%",
    height: "52px",
    boxShadow: state.isFocused ? "0 0 0 1px #FBE9BA" : "none",
    "&:hover": {
      boxShadow: "0 0 0 1px #FBE9BA",
    },
  }),
  menu: (provided) => ({
    ...provided,
    border: "none",
    borderRadius: "12px",
    width: "100%",

    boxShadow: "0 20px 69px 0 rgba(0, 0, 0, 0.07)",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    overflowY: "auto",
    paddingTop: "0px",
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "8px",
    backgroundColor: "transparent",
    color: state.isFocused
      ? "#121417"
      : state.isSelected
      ? "#000 bolt"
      : "rgba(18, 20, 23, 0.2)",

    cursor: "pointer",
    overflowY: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    fontWeight: "500",

    lineHeight: "125%",

    fontSize: "18px",
    // lineHeight: "111%",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: "bold",
  }),
};

const TeachersFilter = ({ data, setTeachersFilter }) => {
  // const [teachersFilter, setTeachersFilter] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  useEffect(() => {
    let filteredData = data;

    // Фільтрація за мовою
    if (selectedLanguage || null) {
      filteredData = filteredData.filter((teacher) =>
        teacher.languages.includes(selectedLanguage)
      );
    }

    // Фільтрація за левелом
    if (selectedLevel || null) {
      filteredData = filteredData.filter((teacher) =>
        teacher.levels.includes(selectedLevel)
      );
    }

    // Фільтрація за ціною
    if (selectedPrice || null) {
      filteredData = filteredData.filter(
        (teacher) => teacher.price_per_hour === selectedPrice
      );
    }

    setSelectedData(filteredData);
  }, [data, selectedLanguage, selectedLevel, selectedPrice, setTeachersFilter]);

  const allLanguages = selectedData
    ? selectedData.reduce((acc, teacher) => {
        teacher.languages.forEach((language) => {
          if (!acc.includes(language)) {
            acc.push(language);
          }
        });
        return acc;
      }, [])
    : [];

  const allPrices = selectedData
    ? selectedData.reduce((acc, teacher) => {
        if (!acc.includes(teacher.price_per_hour)) {
          acc.push(teacher.price_per_hour);
        }
        return acc;
      }, [])
    : [];

  const allLevel = selectedData
    ? selectedData.reduce((acc, teacher) => {
        teacher.levels.forEach((levels) => {
          if (!acc.includes(levels)) {
            acc.push(levels);
          }
        });
        return acc;
      }, [])
    : [];

  const optionsLanguages = [
    { value: "All", label: "All" },
    ...allLanguages.map((language) => ({
      value: language,
      label: language,
    })),
  ];

  const optionsPrices = [
    { value: "All", label: "All" },
    ...allPrices.map((price) => ({
      value: price,
      label: price === "All" ? "All" : `${price} $`,
    })),
  ];

  const optionsLevel = [
    { value: "All", label: "All" },
    ...allLevel.map((level) => ({
      value: level,
      label: level,
    })),
  ];

  const handleLanguageChange = (selectedOption) => {
    let selectedValue = selectedOption ? selectedOption.value : null;

    if (selectedValue === "All") {
      setSelectedLanguage(null);
      setSelectedPrice(null);
      setSelectedLevel(null);

      setTeachersFilter(data);
    } else {
      setSelectedLanguage(selectedValue);
      const filteredTeachers = selectedData.filter((teacher) =>
        teacher.languages.includes(selectedValue)
      );

      setTeachersFilter(filteredTeachers);
    }
  };

  const handLevelChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : null;

    if (selectedValue === "All") {
      setSelectedLanguage(null);
      setSelectedPrice(null);
      setSelectedLevel(null);
      setTeachersFilter(data);
    } else {
      setSelectedLevel(selectedValue);
      const filteredTeachers = selectedData.filter((teacher) =>
        teacher.levels.includes(selectedValue)
      );
      setTeachersFilter(filteredTeachers);
    }
  };

  const handlePriceChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : null;

    if (selectedValue === "All") {
      setSelectedLanguage(null);
      setSelectedPrice(null);
      setSelectedLevel(null);
      setTeachersFilter(data);
    } else {
      setSelectedPrice(selectedValue);
      const filteredTeachers = selectedData.filter(
        (teacher) => teacher.price_per_hour === selectedValue
      );
      setTeachersFilter(filteredTeachers);
    }
  };
  console.log(selectedPrice);
  return (
    <>
      <>
        <section>
          <TeachersFilterDiv>
            <FilterInputDivLanguages>
              <TeachersFilterSpan>Languages</TeachersFilterSpan>
              <Select
                options={optionsLanguages}
                styles={customComponents}
                onChange={handleLanguageChange}
                value={
                  selectedLanguage
                    ? { value: selectedLanguage, label: selectedLanguage }
                    : null
                }
                placeholder={"All"}
              />
            </FilterInputDivLanguages>
            <FilterInputDivLevel>
              <TeachersFilterSpan>Level of knowledge</TeachersFilterSpan>
              <Select
                options={optionsLevel}
                styles={customComponents}
                onChange={handLevelChange}
                value={
                  selectedLevel
                    ? { value: selectedLevel, label: selectedLevel }
                    : null
                }
                placeholder={"All"}
              />
            </FilterInputDivLevel>
            <FilterInputDivPrice>
              <TeachersFilterSpan>Price</TeachersFilterSpan>
              <Select
                options={optionsPrices}
                styles={customComponents}
                onChange={handlePriceChange}
                value={
                  selectedPrice
                    ? { value: selectedPrice, label: `${selectedPrice} $` }
                    : null
                }
                placeholder={"All"}
              />
            </FilterInputDivPrice>
          </TeachersFilterDiv>
        </section>
      </>
    </>
  );
};

export default TeachersFilter;
