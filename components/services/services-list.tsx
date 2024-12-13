import { ServiceCard } from "./service-card";
import { services } from "@/lib/constants/services";

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          icon={service.icon}
          title={service.title}
          description={service.description}
          features={service.features}
        />
      ))}
    </div>
  );
}