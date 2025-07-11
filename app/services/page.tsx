import { Suspense } from 'react';
import { ServiceFilter } from "@/components/service-filter";
import ClientServiceGridWrapper from "@/components/client-service-grid-wrapper";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <Suspense fallback={<div>Loading filters...</div>}>
            <ServiceFilter />
          </Suspense>
        </div>
        <div className="w-full md:w-3/4">
          <Suspense fallback={<div>Loading services...</div>}>
            <ClientServiceGridWrapper />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
