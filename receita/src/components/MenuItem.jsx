import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function MenuItem({ label, subItems }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative group"
    >
      <button
        onClick={() => navigate(`/news/:category${label}`)}
        className="border-amber-200 border-r-3 border-l-3 bg-white py-2 text-sm md:px-4 md:text-base group-hover:text-blue-600 transition-color duration-200 cursor-pointer "
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute hidden md:block mt-2 border-md bg-white px-10 py-2 rounded-md shadow-md "
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <ul className=" ">
              {subItems.map((item, index) => (
                <li
                  key={index}
                  className="whitespace-nowrap px-10 p-4 transtition-colors duration-150 hover:text-blue-600 cursor-pointer border-b-3 border-amber-200 "
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
