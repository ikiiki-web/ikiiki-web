export default function IconExternalLink({ color }: { color?: string }) {
  return (
    <svg width='12' height='13' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <mask id='path-1-inside-1_131_22930' fill='white'>
        <rect y='3.75' width='8.75' height='8.75' rx='1' />
      </mask>
      <rect
        y='3.75'
        width='8.75'
        height='8.75'
        rx='1'
        stroke={color}
        stroke-width='3'
        mask='url(#path-1-inside-1_131_22930)'
      />
      <path
        d='M3.5 1.5H10C10.5523 1.5 11 1.94772 11 2.5V9'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
      />
    </svg>
  )
}
