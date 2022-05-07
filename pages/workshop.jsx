import { useRef } from "react";

export default function Workshop() {
  return (
    <div className="w-full" style={{height: `calc(100vh - 3.5rem)`}}>
      <iframe src="https://where-are-we-heading-today.netlify.app/" height="100%" width="100%" title="Where are we heading today"></iframe>
    </div>
  )
}