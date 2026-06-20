import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-12-01");

  const [days, setDays] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = targetDate - new Date();

      const remainingDays = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      setDays(remainingDays);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      🚀 {days} Days To Go
    </div>
  );
}