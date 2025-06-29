import { twMerge } from "tailwind-merge";
import React from "react";

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  const childCount = React.Children.count(children);

  return (
    <div
      className="absolute left -1/2 top -1/2"
      style={{
        width: 0,
        height: 0,
        animation: `orbit ${calculatedDuration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {path && (
        <svg className="absolute -left-[160px] -top-[160px] w-[320px] h-[320px] pointer-events-none">
          <circle
            className="stroke-1 stroke-white/10"
            cx="160"
            cy="160"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / childCount) * index;
        const angleRad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);

        return (
          <div
            className={twMerge(
              `absolute flex items-center justify-center`,
              className
            )}
            style={{
              width: iconSize,
              height: iconSize,
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%)`,
            }}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
// import { twMerge } from "tailwind-merge";
// import React from "react";

// export function OrbitingCircles({
//   className,
//   children,
//   reverse,
//   duration = 20,
//   radius = 160,
//   path = true,
//   iconSize = 30,
//   speed = 1,
//   ...props
// }) {
//   const calculatedDuration = duration / speed;
//   return (
//     <>
//       {path && (
//         <svg
//           xmlns="https://www.w3.org/TR/SVG2/"
//           version="1.1"
//           className="absolute inset-0 pointer-events-none size-full"
//         >
//           <circle
//             className="stroke-1 stroke-white/10"
//             cx="50%"
//             cy="50%"
//             r={radius}
//             fill="none"
//           />
//         </svg>
//       )}
//       {React.Children.map(children, (child, index) => {
//         const angle = (360 / React.Children.count(children)) * index;
//         return (
//           <div
//             style={{
//               "--duration": calculatedDuration,
//               "--radius": radius,
//               "--angle": angle,
//               "--icon-size": `${iconSize}px`,
//             }}
//             className={twMerge(
//               `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${
//                 reverse ? "[animation-direction:reverse]" : ""
//               }`,
//               className
//             )}
//             {...props}
//           >
//             {child}
//           </div>
//         );
//       })}
//     </>
//   );
// }