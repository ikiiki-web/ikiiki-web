export default function IconArw({ color }: { color?: string }) {
  return (
    <svg viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 13L7 7L1 1'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
