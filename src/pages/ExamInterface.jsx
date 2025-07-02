import React, { useState } from "react";
import { motion } from "framer-motion";
import { Flag } from "lucide-react";

const questions = [
  {
    question: "Dövlət qulluğuna qəbul zamanı hansı keyfiyyət daha vacibdir?",
    options: [
      "Yüksək bal toplamaq",
      "Doğru geyim tərzi",
      "İctimai nitq qabiliyyəti",
      "Əmək qanunvericiliyini bilmək"
    ]
  },
  {
    question: "İmtahanda vaxtı necə bölmək daha səmərəlidir?",
    options: [
      "Hər suala eyni vaxt",
      "Əvvəl çətin suallar",
      "Əvvəl asan suallar",
      "Vaxt bölmək lazım deyil"
    ]
  }
];

export default function ExamInterface() {
  const [current, setCurrent] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flagged, setFlagged] = useState([]);

  const currentQ = questions[current];

  const handleSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [current]: index });
  };

  const toggleFlag = () => {
    setFlagged((prev) =>
      prev.includes(current) ? prev.filter((i) => i !== current) : [...prev, current]
    );
  };

  return (
    <div className="px-4 md:px-10 py-16 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-[#38bdf8] rounded-lg shadow-lg p-6 bg-[#1e293b]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-[#38bdf8] font-bold uppercase">
              Sual {current + 1} / {questions.length}
            </h2>
            <button
              onClick={toggleFlag}
              className={`p-2 rounded-full border-2 ${
                flagged.includes(current) ? "border-[#facc15] bg-[#facc15]/10" : "border-gray-600"
              } hover:border-[#facc15] transition`}
            >
              <Flag size={18} />
            </button>
          </div>
          <p className="text-lg font-medium text-white mb-6">{currentQ.question}</p>
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-5 py-3 rounded-md border-2 transition text-sm font-medium
                  ${selectedAnswers[current] === idx
                    ? "border-[#facc15] bg-[#facc15]/10"
                    : "border-gray-600 hover:border-[#38bdf8] hover:bg-[#1e40af]/10"}`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="mt-8 flex justify-between gap-4">
            <button
              disabled={current === 0}
              onClick={() => setCurrent((c) => c - 1)}
              className="w-full py-2 rounded bg-[#334155] hover:bg-[#475569] transition disabled:opacity-30"
            >
              ⬅ Əvvəlki
            </button>
            <button
              disabled={current === questions.length - 1}
              onClick={() => setCurrent((c) => c + 1)}
              className="w-full py-2 rounded bg-[#38bdf8] hover:bg-[#0ea5e9] transition"
            >
              Növbəti ➡
            </button>
          </div>
        </motion.div>
      </div>

      <aside className="w-full md:w-64 bg-[#1e293b] border border-[#334155] rounded-lg p-5">
        <h3 className="text-[#38bdf8] text-lg font-semibold mb-4">Suallar</h3>
        <div className="grid grid-cols-5 md:grid-cols-3 gap-3">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`text-sm p-2 rounded-md font-semibold transition
                ${current === idx
                  ? "bg-[#38bdf8] text-white"
                  : "bg-[#334155] text-gray-300 hover:bg-[#3b4252]"}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}