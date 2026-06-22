import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SideBar() {
  const [hoverItem1, setHoverItem1] = useState(false);
  const [hoverItem2, setHoverItem2] = useState(false);
  const [hoverItem3, setHoverItem3] = useState(false);
  const [hoverItem4, setHoverItem4] = useState(false);
  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-white border border-gray-300 shadow-sm w-screen h-[50px] flex items-center justify-center ">
      <div className="flex gap-50">
        {/* ----------- BOTÃO ITEM 1 ---------- */}
        <div
          onMouseEnter={() => setHoverItem1(true)}
          onMouseLeave={() => setHoverItem1(false)}
          className="relative"
        >
          <button className=" border  bg-white px-4 py-1">ITEM 1</button>
          <AnimatePresence>
            {hoverItem1 && (
              <motion.div
                className="absolute left-0 top-full mt-2"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="border bg-white px-10 py-1 h-50px ">
                  SUBMENU ITEM 1
                  <ul>
                    <li>item 1.1</li>
                    <li>item 1.2</li>
                    <li>item 1.3</li>
                    <li>item 1.4</li>
                  </ul>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ----------- BOTÃO ITEM 2 ---------- */}
        <div
          onMouseEnter={() => setHoverItem2(true)}
          onMouseLeave={() => setHoverItem2(false)}
          className="relative"
        >
          <button className=" border  bg-white px-4 py-1">ITEM 2</button>
          <AnimatePresence>
            {hoverItem2 && (
              <motion.div
                className="absolute left-0 top-full mt-2"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="border bg-white px-10 py-1 h-50px ">
                  SUBMENU ITEM 2
                  <ul>
                    <li>item 2.1</li>
                    <li>item 2.2</li>
                    <li>item 2.3</li>
                    <li>item 2.4</li>
                  </ul>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ----------- BOTÃO ITEM 3 ---------- */}
        <div
          onMouseEnter={() => setHoverItem3(true)}
          onMouseLeave={() => setHoverItem3(false)}
          className="relative"
        >
          <button className=" border  bg-white px-4 py-1">ITEM 3</button>
          <AnimatePresence>
            {hoverItem3 && (
              <motion.div
                className="absolute left-0 top-full mt-2"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="border bg-white px-10 py-1 h-50px justify-center ">
                  SUBMENU ITEM 3
                  <ul>
                    <li>item 3.1</li>
                    <li>item 3.2</li>
                    <li>item 3.3</li>
                    <li>item 3.4</li>
                  </ul>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* ----------- BOTÃO ITEM 4 ---------- */}
        <div
          onMouseEnter={() => setHoverItem4(true)}
          onMouseLeave={() => setHoverItem4(false)}
          className="relative"
        >
          <button className=" border  bg-white px-4 py-1">ITEM 4</button>
          <AnimatePresence>
            {hoverItem4 && (
              <motion.div
                className="absolute left-0 top-full mt-2"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="border bg-white px-10 py-1 h-50px ">
                  SUBMENU ITEM 4
                  <ul>
                    <li>item 4.1</li>
                    <li>item 4.2</li>
                    <li>item 4.3</li>
                    <li>item 4.4</li>
                  </ul>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
