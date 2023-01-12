import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import arrow_icon from "../../assets/icons/arrow_icon.svg";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onChange: (option: Option) => void;
  title: string;
  titleColor?: string;
  dropdownDirection?: 'up' | 'down';
  name?: string;
}

export const Autocomplete: React.FC<Props> = ({ options, onChange, title, titleColor, dropdownDirection = 'down', name }) => {
  const [open, setOpen] = useState(false);
  const { register, setValue } = useForm();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleChange = (option: Option) => {
    setSelectedOption(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
        <label className={`block ${titleColor ? titleColor : "text-white"}text-base font-bold mb-1`}>
                {title}
            </label>
      <div
        onClick={toggleOpen}
        className={`flex flex-row justify-between text-left appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline ${selectedOption === null ? "text-grey" : "text-gray-600"}`}
      >
        {selectedOption ? selectedOption.label : `Sélectionner`}
        <Image
          className="w-3 transition-transform duration-700"
          src={arrow_icon}
          alt="arrow"
        />
        {/* <i className="fas fa-caret-down absolute right-0 mr-4 text-gray-600"></i> */}
      </div>
      {open && (
        <ul className={`absolute z-50 bg-white rounded-md shadow-lg ${dropdownDirection === 'up' ? 'top-0' : 'bottom-0'} mt-1 w-full py-1 list-none`}>
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={() => handleChange(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <input name={name} {...register} type="hidden" />
    </div>
  );
};