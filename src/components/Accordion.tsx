import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-flush" className="w-full">
      {items.map((item, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-4 text-lg font-semibold text-left text-gray-800 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700"
              aria-expanded={openIndex === index}
              aria-controls={`accordion-flush-body-${index}`}
            >
              <span>{item.title}</span>
              <FiChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${index}`}
            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
            aria-labelledby={`accordion-flush-heading-${index}`}
          >
            <div className="py-4 text-gray-600 dark:text-gray-400">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};