import React from 'react';
import { MateoExpression } from '../types/dialogue';

interface MateoSpriteProps {
  expression: MateoExpression;
  speaking?: boolean;
}

export const MateoSprite: React.FC<MateoSpriteProps> = ({
  expression,
  speaking = false,
}) => {
  const expressionMeta: Record<
    MateoExpression,
    { labelRu: string; emoji: string }
  > = {
    smiling: { labelRu: 'Улыбается', emoji: '😊' },
    surprised: { labelRu: 'Удивлён', emoji: '😮' },
    thinking: { labelRu: 'Задумался', emoji: '🤔' },
    excited: { labelRu: 'Воодушевлён', emoji: '✨' },
  };

  return (
    <div className="relative flex flex-col items-center justify-end h-full select-none pointer-events-none transition-transform duration-300">
      {/* Sprite illustration container */}
      <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] flex items-end justify-center filter drop-shadow-2xl">
        <svg
          viewBox="0 0 320 440"
          className="w-full h-full overflow-visible transition-all duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Skin tone gradient */}
            <linearGradient id="mateoSkin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d49b6a" />
              <stop offset="100%" stopColor="#be8251" />
            </linearGradient>

            {/* Hair gradient */}
            <linearGradient id="mateoHair" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#221815" />
              <stop offset="100%" stopColor="#140d0c" />
            </linearGradient>

            {/* Jacket gradient (Navy Philharmonic chic) */}
            <linearGradient id="mateoJacket" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Sweater gradient (Burgundy / Wine) */}
            <linearGradient id="mateoSweater" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#881337" />
              <stop offset="100%" stopColor="#4c0519" />
            </linearGradient>

            {/* Scarf / Collar subtle accent */}
            <linearGradient id="mateoScarf" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            {/* Soft shadow under chin */}
            <linearGradient id="chinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Shoulders & Torso */}
          <g id="body">
            {/* Dark Philharmonic Jacket */}
            <path
              d="M 60 440 L 70 320 C 75 270 100 240 160 240 C 220 240 245 270 250 320 L 260 440 Z"
              fill="url(#mateoJacket)"
              stroke="#334155"
              strokeWidth="1.5"
            />

            {/* Burgundy Sweater Chest insert */}
            <path
              d="M 115 250 C 130 255 160 258 160 258 C 160 258 190 255 205 250 L 200 440 L 120 440 Z"
              fill="url(#mateoSweater)"
            />

            {/* Crisp Shirt Collar V-neck */}
            <polygon
              points="140,245 160,265 150,240"
              fill="#ffffff"
              opacity="0.95"
            />
            <polygon
              points="180,245 160,265 170,240"
              fill="#f1f5f9"
              opacity="0.95"
            />

            {/* Jacket Lapels */}
            <path
              d="M 100 240 L 130 330 L 110 350 L 85 270 Z"
              fill="#1e293b"
              stroke="#475569"
              strokeWidth="1"
            />
            <path
              d="M 220 240 L 190 330 L 210 350 L 235 270 Z"
              fill="#1e293b"
              stroke="#475569"
              strokeWidth="1"
            />

            {/* Subtle Pocket with Ecuador warm pocket square accent */}
            <path
              d="M 215 320 L 245 320 L 243 325 L 217 325 Z"
              stroke="#64748b"
              strokeWidth="2"
            />
            <path
              d="M 225 320 L 235 310 L 240 320 Z"
              fill="url(#mateoScarf)"
            />
          </g>

          {/* Neck */}
          <g id="neck">
            <rect
              x="142"
              y="200"
              width="36"
              height="50"
              rx="6"
              fill="url(#mateoSkin)"
            />
            <path
              d="M 142 210 Q 160 225 178 210 L 178 230 Q 160 240 142 230 Z"
              fill="url(#chinShadow)"
            />
          </g>

          {/* Head & Face base */}
          <g
            id="head"
            className={
              expression === 'thinking'
                ? 'origin-[160px_170px] -rotate-3 transition-transform duration-300'
                : 'transition-transform duration-300'
            }
          >
            {/* Ears */}
            <ellipse cx="108" cy="168" rx="8" ry="12" fill="url(#mateoSkin)" />
            <ellipse
              cx="108"
              cy="168"
              rx="4"
              ry="7"
              fill="#be8251"
              opacity="0.6"
            />
            <ellipse cx="212" cy="168" rx="8" ry="12" fill="url(#mateoSkin)" />
            <ellipse
              cx="212"
              cy="168"
              rx="4"
              ry="7"
              fill="#be8251"
              opacity="0.6"
            />

            {/* Face shape (warm Latino oval with defined jaw) */}
            <path
              d="M 112 135 C 112 100 130 90 160 90 C 190 90 208 100 208 135 C 208 175 195 210 160 215 C 125 210 112 175 112 135 Z"
              fill="url(#mateoSkin)"
            />

            {/* Natural warm blush on cheeks */}
            <ellipse
              cx="128"
              cy="168"
              rx="10"
              ry="6"
              fill="#e11d48"
              opacity={expression === 'excited' ? '0.22' : '0.12'}
            />
            <ellipse
              cx="192"
              cy="168"
              rx="10"
              ry="6"
              fill="#e11d48"
              opacity={expression === 'excited' ? '0.22' : '0.12'}
            />

            {/* Nose */}
            <path
              d="M 160 148 L 158 170 Q 160 174 164 172"
              fill="none"
              stroke="#a26c40"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M 154 172 Q 160 176 166 172"
              fill="none"
              stroke="#a26c40"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Expression-dependent Eyes & Eyebrows */}
            {expression === 'smiling' && (
              <g id="eyes-smiling">
                {/* Friendly curved eyebrows */}
                <path
                  d="M 125 140 Q 138 134 148 139"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 172 139 Q 182 134 195 140"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Warm smiling eyes (almond shape with sparkle) */}
                <path
                  d="M 127 155 Q 137 148 147 155 Q 137 160 127 155 Z"
                  fill="#ffffff"
                />
                <circle cx="137" cy="154" r="4.5" fill="#3b2518" />
                <circle cx="138" cy="153" r="1.5" fill="#ffffff" />

                <path
                  d="M 173 155 Q 183 148 193 155 Q 183 160 173 155 Z"
                  fill="#ffffff"
                />
                <circle cx="183" cy="154" r="4.5" fill="#3b2518" />
                <circle cx="184" cy="153" r="1.5" fill="#ffffff" />
              </g>
            )}

            {expression === 'surprised' && (
              <g id="eyes-surprised">
                {/* Raised high surprised brows */}
                <path
                  d="M 123 132 Q 136 126 148 134"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 172 134 Q 184 126 197 132"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Wide rounded eyes */}
                <ellipse cx="137" cy="152" rx="9" ry="8" fill="#ffffff" />
                <circle cx="137" cy="152" r="5" fill="#3b2518" />
                <circle cx="139" cy="150" r="2" fill="#ffffff" />

                <ellipse cx="183" cy="152" rx="9" ry="8" fill="#ffffff" />
                <circle cx="183" cy="152" r="5" fill="#3b2518" />
                <circle cx="185" cy="150" r="2" fill="#ffffff" />
              </g>
            )}

            {expression === 'thinking' && (
              <g id="eyes-thinking">
                {/* One eyebrow raised, one slightly furrowed */}
                <path
                  d="M 124 140 Q 136 141 147 143"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 171 135 Q 183 130 196 137"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Looking up-right thoughtfully */}
                <ellipse cx="137" cy="154" rx="8" ry="6" fill="#ffffff" />
                <circle cx="140" cy="152" r="4.2" fill="#3b2518" />
                <circle cx="141" cy="151" r="1.5" fill="#ffffff" />

                <ellipse cx="183" cy="154" rx="8" ry="6" fill="#ffffff" />
                <circle cx="186" cy="152" r="4.2" fill="#3b2518" />
                <circle cx="187" cy="151" r="1.5" fill="#ffffff" />
              </g>
            )}

            {expression === 'excited' && (
              <g id="eyes-excited">
                {/* High enthusiastic brows */}
                <path
                  d="M 124 135 Q 137 129 149 137"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 171 137 Q 183 129 196 135"
                  fill="none"
                  stroke="#1c1917"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Sparkle happy eyes */}
                <ellipse cx="137" cy="153" rx="8.5" ry="7" fill="#ffffff" />
                <circle cx="137" cy="153" r="5" fill="#3b2518" />
                <circle cx="139" cy="150" r="2.2" fill="#ffffff" />
                <circle cx="135" cy="155" r="1" fill="#ffffff" />

                <ellipse cx="183" cy="153" rx="8.5" ry="7" fill="#ffffff" />
                <circle cx="183" cy="153" r="5" fill="#3b2518" />
                <circle cx="185" cy="150" r="2.2" fill="#ffffff" />
                <circle cx="181" cy="155" r="1" fill="#ffffff" />
              </g>
            )}

            {/* Expression-dependent Mouth */}
            {expression === 'smiling' && (
              <path
                d="M 148 186 Q 160 196 172 186"
                fill="none"
                stroke="#6b1d2f"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            )}

            {expression === 'surprised' && (
              <ellipse
                cx="160"
                cy="188"
                rx="6"
                ry="8"
                fill="#4c0519"
                stroke="#6b1d2f"
                strokeWidth="2"
              />
            )}

            {expression === 'thinking' && (
              <path
                d="M 150 188 Q 160 187 170 185"
                fill="none"
                stroke="#6b1d2f"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            )}

            {expression === 'excited' && (
              <g>
                <path
                  d="M 146 184 Q 160 200 174 184 Z"
                  fill="#7f1d1d"
                  stroke="#6b1d2f"
                  strokeWidth="1.8"
                />
                <path
                  d="M 148 184 Q 160 188 172 184 L 170 187 Q 160 190 150 187 Z"
                  fill="#ffffff"
                />
              </g>
            )}

            {/* Stylish Modern Wavy Dark Hair */}
            <path
              d="M 106 130 C 104 90 120 70 160 70 C 200 70 216 90 214 130 C 218 105 210 80 185 75 C 160 70 135 76 118 90 C 110 98 106 112 106 130 Z"
              fill="url(#mateoHair)"
            />
            {/* Front hair fringe & waves */}
            <path
              d="M 110 115 C 125 100 150 96 175 105 C 190 112 205 110 212 122 C 204 112 188 105 168 104 C 145 103 125 112 110 115 Z"
              fill="#1c1917"
            />
            <path
              d="M 130 92 Q 155 82 178 90 Q 155 78 130 92 Z"
              fill="#292524"
            />
          </g>
        </svg>

        {/* Speaking visual pulse indicator */}
        {speaking && (
          <div className="absolute top-12 right-6 bg-sky-500/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-lg shadow-sky-500/30 flex items-center gap-1.5 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Hablando...</span>
          </div>
        )}
      </div>

      {/* Modern Badge for Mateo */}
      <div className="mt-2 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/80 shadow-xl">
        <span className="text-sm font-semibold tracking-wide text-amber-300">
          Mateo
        </span>
        <span className="text-slate-500 text-xs">·</span>
        <span className="text-xs text-slate-300">Ecuador 🇪🇨</span>
        <span className="text-slate-500 text-xs">·</span>
        <span className="text-xs font-medium text-sky-300 flex items-center gap-1">
          <span>{expressionMeta[expression].emoji}</span>
          <span>{expressionMeta[expression].labelRu}</span>
        </span>
      </div>
    </div>
  );
};
