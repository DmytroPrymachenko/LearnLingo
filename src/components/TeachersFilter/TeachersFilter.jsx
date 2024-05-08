import Select from "react-select";
import { TeachersFilterDiv, TeachersFilterSpan } from "./TeachersFilter.Styles";
import { useEffect, useState } from "react";

const optionsLevel = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
];
const Price = [
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
];

const customComponents = {
  padding: "0",

  //   dropdownIndicator: () => ({ display: "none" }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  control: () => ({
    display: "flex",
  }),
  menu: (provided) => ({
    ...provided,
    border: "none",
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
    backgroundColor: "transparent",

    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "111%",
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
    if (selectedLanguage) {
      filteredData = filteredData.filter((teacher) =>
        teacher.languages.includes(selectedLanguage)
      );
    }

    // Фільтрація за левелом
    if (selectedLevel) {
      filteredData = filteredData.filter((teacher) =>
        teacher.levels.includes(selectedLevel)
      );
    }

    // Фільтрація за ціною
    if (selectedPrice) {
      filteredData = filteredData.filter(
        (teacher) => teacher.price_per_hour === selectedPrice
      );
    }

    setSelectedData(filteredData);
  }, [data, selectedLanguage, selectedLevel, selectedPrice]);

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
  // console.log(allLanguages);

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
  console.log(allLevel);

  const optionsLanguages = allLanguages.map((language) => ({
    value: language,
    label: language,
  }));

  const optionsPrices = allPrices.map((price) => ({
    value: price,
    label: `${price}$`,
  }));

  const optionsLevel = allLevel.map((levels) => ({
    value: levels,
    label: levels,
  }));

  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption ? selectedOption.value : null);

    if (selectedOption) {
      const filteredTeachers = selectedData.filter((teacher) =>
        teacher.languages.includes(selectedOption.value)
      );
      setTeachersFilter(filteredTeachers);
    } else {
      setTeachersFilter(selectedData);
    }
  };

  const handLevelChange = (selectedOption) => {
    setSelectedLevel(selectedOption ? selectedOption.value : null);

    if (selectedOption) {
      const filteredTeachers = selectedData.filter((teacher) =>
        teacher.levels.includes(selectedOption.value)
      );
      setTeachersFilter(filteredTeachers);
    } else {
      setTeachersFilter(selectedData);
    }
  };
  console.log(data);

  const handlePriceChange = (selectedOption) => {
    setSelectedPrice(selectedOption ? selectedOption.value : null);

    if (selectedOption) {
      const filteredTeachers = selectedData.filter(
        (teacher) => teacher.price_per_hour === selectedOption.value
      );
      setTeachersFilter(filteredTeachers);
    } else {
      setTeachersFilter(selectedData);
    }
  };

  // console.log(data);
  return (
    <>
      <>
        <section>
          <TeachersFilterDiv>
            <div>
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
              />
            </div>
            <div>
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
              />
            </div>
            <div>
              <TeachersFilterSpan>Price</TeachersFilterSpan>
              <Select
                options={optionsPrices}
                onChange={handlePriceChange}
                value={
                  selectedPrice
                    ? { value: selectedPrice, label: `${selectedPrice}$` }
                    : null
                }
              />
            </div>
          </TeachersFilterDiv>
        </section>
      </>
    </>
  );
};

export default TeachersFilter;
