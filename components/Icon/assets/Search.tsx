const Search = (props: React.SVGProps<SVGSVGElement> | any) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="6"
      y="5"
      width="17"
      height="17"
      rx="8.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <line
      x1="20.2728"
      y1="20"
      x2="24.5355"
      y2="24.2627"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Search;
