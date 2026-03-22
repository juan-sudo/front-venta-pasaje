import { seatPalette } from "../data"
import type { Seat } from "../types"

type SeatButtonProps = {
  seat?: Seat | null
  isSelected?: boolean
  className?: string
  onSelect?: (seatNumber: number) => void
}

export function SeatButton({
  seat,
  isSelected = false,
  className = "h-[50px] w-[36px]",
  onSelect,
}: SeatButtonProps) {
  if (!seat) return <div className={className} />

  const palette = seatPalette[seat.status]

  return (
    <button
      type="button"
      onClick={() => onSelect?.(seat.number)}
      className={`${className} group flex items-center justify-center rounded-[12px] transition duration-150 hover:-translate-y-0.5 ${
        isSelected ? "bg-[#eef4ff] shadow-[0_0_0_2px_rgba(37,99,235,0.18)]" : ""
      }`}
      aria-label={`Asiento ${seat.number}`}
      aria-pressed={isSelected}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        className={`overflow-visible drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] transition ${
          isSelected ? "scale-[1.06]" : ""
        }`}
      >
        <g clipPath={`url(#seat-clip-${seat.number})`}>
          <path
            opacity="0.5"
            d="M28.2998 11.1004H28.4998V5.20039C28.4998 2.80039 26.5998 0.900391 24.1998 0.900391H7.7998C5.3998 0.900391 3.4998 2.80039 3.4998 5.20039V11.1004C1.9998 11.2004 0.799805 12.4004 0.799805 13.9004V26.8004C0.799805 29.2004 2.6998 31.1004 5.0998 31.1004H26.7998C29.1998 31.1004 31.0998 29.2004 31.0998 26.8004V14.0004C31.1998 12.4004 29.8998 11.1004 28.2998 11.1004Z"
            fill={palette.fill}
          />
          <path
            d="M3.50039 11.1008V4.80078C3.50039 2.60078 5.30039 0.800781 7.50039 0.800781H24.5004C26.7004 0.800781 28.5004 2.60078 28.5004 4.80078V11.1008M28.3004 11.1008H27.4004C26.6004 11.1008 26.0004 11.8008 26.0004 12.5008V21.2008C26.0004 23.6008 24.1004 25.5008 21.7004 25.5008H10.4004C8.00039 25.5008 6.10039 23.6008 6.10039 21.2008V12.5008C6.10039 11.7008 5.50039 11.1008 4.70039 11.1008H3.70039C2.10039 11.1008 0.900391 12.4008 0.900391 13.9008V27.1008C0.900391 29.3008 2.70039 31.1008 4.90039 31.1008H27.2004C29.4004 31.1008 31.2004 29.3008 31.2004 27.1008V14.0008C31.2004 12.4008 29.9004 11.1008 28.3004 11.1008Z"
            stroke={isSelected ? "#2563EB" : palette.stroke}
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </g>
        <text
          x="16.5"
          y="13.5"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="9.5"
          fill={isSelected ? "#2563EB" : palette.text}
          fontWeight="800"
        >
          {seat.number}
        </text>
        <defs>
          <clipPath id={`seat-clip-${seat.number}`}>
            <rect width="32" height="32" fill="white" transform="translate(0.879395)" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}
