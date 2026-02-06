import { TrendingUp, Heart, MapPin, Users } from "lucide-react";
import StatCard from "./StatCard";

const stats = [
  {
    icon: MapPin,
    value: "5km",
    label: "Reduction in travel distance",
    description: "Patients now access care within 10km"
  },
  {
    icon: Heart,
    value: "40%",
    label: "Better health outcomes",
    description: "Through early detection & prevention"
  },
  {
    icon: Users,
    value: "5M+",
    label: "Underserved Kenyans",
    description: "That we aim to reach by 2027"
  },
  {
    icon: TrendingUp,
    value: "KSh 2B",
    label: "Annual patient savings",
    description: "In reduced healthcare travel costs"
  }
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Making Real Impact in Kenya's Healthcare
          </h2>
          <p className="text-primary-foreground/80">
            Our mission is measurable. Here's how we're transforming healthcare access.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
