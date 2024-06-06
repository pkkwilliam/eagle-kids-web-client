import React from "react";
import { useDispatch } from "react-redux";
import { selectLanguage } from "src/redux/features/language-slice";
import LANGUAGES from "src/enum/languages";
import globe from "@assets/img/language/globe.png";
import Image from "next/image";

const LanguageDropdownSelector = () => {
  const dispatch = useDispatch();
  const LanguageOptions = LANGUAGES.sort((l1, l2) => l2.weight - l1.weight).map(
    (language) => {
      return (
        <li key={language.code}>
          <a
            class="dropdown-item"
            onClick={() => dispatch(selectLanguage(language.code))}
          >
            {language.label}
          </a>
        </li>
      );
    }
  );
  return (
    <>
      <div class="dropdown d-flex justify-content-end align-items-center">
        <button
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image
            src={globe}
            style={{ height: "32px", width: "32px", margin: 8 }}
          />
        </button>

        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ zIndex: 999 }}
        >
          {LanguageOptions}
        </ul>
      </div>
    </>
  );
};

export default LanguageDropdownSelector;
