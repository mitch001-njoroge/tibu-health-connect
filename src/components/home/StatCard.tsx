import { LucideIcon } from "lucide-react";
import { useCountUp, parseStatValue } from "@/hooks/useCountUp";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description: string;
}

const StatCard = ({ icon: Icon, value, label, description }: StatCardProps) => {
  const { number, prefix, suffix, decimals } = parseStatValue(value);
  const { ref, displayValue } = useCountUp({
    end: number,
    duration: 2000,
    prefix,
    suffix,
    decimals,
  });

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
    >
      <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-4xl font-bold mb-2">{displayValue}</p>
      <p className="font-medium mb-1">{label}</p>
      <p className="text-sm text-primary-foreground/70">{description}</p>
    </div>
  );
};

export default StatCard;
