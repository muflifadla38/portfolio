const CircularProgress = ({
  barColor = "text-blue-600",
  totalBar,
  className,
}) => {
  return (
    <svg className={`w-28 h-28 ${className}`}>
      {totalBar && (
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="5"
          className="text-gray-300"
        ></circle>
      )}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="transparent"
        stroke="currentColor"
        strokeDasharray="300"
        strokeDashoffset="70"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        transform="rotate(-90 50 50)"
        className={barColor}
      ></circle>
    </svg>
  );
};

export default CircularProgress;
